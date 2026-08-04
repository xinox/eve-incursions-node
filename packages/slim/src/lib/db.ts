import {DataSource} from 'typeorm';
import {ensureAppDataSource} from './data-source';
import {ActiveCommunitiesQuery, ActiveSpawnsQuery, Constellation, IncursionRespawnWindow, Rat, RatGroupsQuery, SolarSystem, Spawn, SpawnLogsQuery, Station} from './graphql';

type SqlValue = string | number | Uint8Array | boolean | Date | null;
type Row = Record<string, SqlValue>;

const respawnDelay = 12 * 60 * 60 * 1000;
const respawnWindow = 24 * 60 * 60 * 1000;

const respawnSlotConfig = [
  {securityArea: 'high' as const, label: 'High-Sec', totalSlots: 1},
  {securityArea: 'low' as const, label: 'Low-Sec', totalSlots: 1},
  {securityArea: 'null' as const, label: 'Null-Sec', totalSlots: 3},
];

const isKnownSecurityArea = (value: unknown): value is 'high' | 'low' | 'null' => value === 'high' || value === 'low' || value === 'null';

const seededRespawnRows = [
  {
    endedAt: '2026-06-26 16:40:00',
    spawnedAt: '2026-06-22 15:24:00',
    securityArea: 'null' as const,
    constellationName: '2Q-8WA',
    regionName: 'The Kalevala Expanse',
    stageSystemName: '2Q-8WA',
  },
  {
    endedAt: '2026-06-27 05:16:00',
    spawnedAt: '2026-06-22 23:25:00',
    securityArea: 'null' as const,
    constellationName: '4BZ-R3',
    regionName: 'Providence',
    stageSystemName: '4BZ-R3',
  },
];

const prepareSql = (sql: string, source: DataSource) => {
  if (source.options.type !== 'postgres') return sql;

  let index = 0;
  return sql.replace(/\?/g, () => `$${++index}`);
};

const queryRows = async (source: DataSource, sql: string, params: SqlValue[] = []): Promise<Row[]> => {
  return source.query(prepareSql(sql, source), params) as Promise<Row[]>;
};

const scalar = async <T extends SqlValue>(source: DataSource, sql: string, params: SqlValue[] = []): Promise<T | null> => {
  const row = (await queryRows(source, sql, params))[0];
  if (!row) return null;
  return Object.values(row)[0] as T;
};

const hasTable = async (source: DataSource, table: string) => {
  if (source.options.type === 'postgres') {
    return Boolean(await scalar<number>(source, `select count(*) from information_schema.tables where table_schema = current_schema() and table_name = ?`, [table]));
  }

  return Boolean(await scalar<number>(source, `select count(*) from sqlite_master where type = 'table' and name = ?`, [table]));
};

const bool = (value: SqlValue) => value === 1 || value === '1' || value === true;
const number = (value: SqlValue) => Number(value ?? 0);
const text = (value: SqlValue) => String(value ?? '');

const isoDate = (value: SqlValue | undefined) => {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value.toISOString();

  const raw = String(value).trim();
  if (!raw) return null;

  let normalized = raw.replace(' ', 'T');
  if (!/(z|[+-]\d\d(?::?\d\d)?)$/i.test(normalized)) {
    normalized += 'Z';
  }

  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};

const securityArea = (security: number): SolarSystem['securityArea'] => {
  if (security <= 0) return 'null';
  return security >= 0.5 ? 'high' : 'low';
};

const displaySecurity = (value: SqlValue) => {
  const security = Number(value ?? 0);
  return security > 0 ? Number(security.toFixed(1)) : Number(security.toFixed(2));
};

const displaySize = (value: SqlValue) => (Number(value ?? 0) + 17) * 2;

const activeSpawnRows = (source: DataSource) => queryRows(source, `
  select
    spawn.id as "spawnId",
    spawn.state as "spawnState",
    spawn.active as "spawnActive",
    spawn."hasBoss" as "spawnHasBoss",
    spawn.established_at as "spawnEstablishedAt",
    spawn.ended_at as "spawnEndedAt",
    spawn.influence as "spawnInfluence",
    constellation."constellationID" as "constellationId",
    constellation."constellationName" as "constellationName",
    region."regionID" as "regionId",
    region."regionName" as "regionName",
    system."solarSystemID" as "systemId",
    system."solarSystemName" as "systemName",
    system."sovereigntyHolderID",
    system."sovereigntyHolderName",
    system."systemSize" as "systemSize",
    system.security,
    system."systemType" as "systemType"
  from spawns spawn
  join mapconstellations constellation on constellation."constellationID" = spawn."constellationId"
  join mapregions region on region."regionID" = constellation."regionID"
  join solar_systems system on system."constellationID" = constellation."constellationID"
  where spawn.active = true
  order by spawn.established_at desc, system."solarSystemName"
`);

const activeStationRows = (source: DataSource) => queryRows(source, `
  select
    station."solarSystemID" as "systemId",
    station."stationID" as id,
    station."stationName" as name,
    exists(
      select 1
      from sta_operation_services service
      where service."operationID" = station."operationID"
        and service."serviceID" = 4096
    ) as "hasRepairService"
  from sta_stations station
  join solar_systems system on system."solarSystemID" = station."solarSystemID"
  where system."constellationID" in (
    select "constellationId" from spawns where active = true
  )
  order by station."solarSystemID", station."stationName"
`);

const activeInfluenceRows = (source: DataSource) => queryRows(source, `
  select ranked."spawnId", ranked.influence
  from (
    select
      influence.spawn_id as "spawnId",
      influence.influence,
      influence.id,
      row_number() over (partition by influence.spawn_id order by influence.id desc) as row_num
    from spawn_influence_logs influence
    join spawns spawn on spawn.id = influence.spawn_id
    where spawn.active = true
  ) ranked
  where ranked.row_num <= 72
  order by ranked."spawnId", ranked.id desc
`);

const activeStateRows = (source: DataSource) => queryRows(source, `
  select ranked."spawnId", ranked.date
  from (
    select
      log.spawn_id as "spawnId",
      log.date,
      row_number() over (partition by log.spawn_id order by log.date desc, log.id desc) as row_num
    from spawn_logs log
    join spawns spawn on spawn.id = log.spawn_id
    where spawn.active = true
  ) ranked
  where ranked.row_num = 1
`);

const endedSpawnRows = (source: DataSource) => queryRows(source, `
  select
    spawn.ended_at as "endedAt",
    spawn.established_at as "spawnedAt",
    case
      when system.security >= 0.45 then 'high'
      when system.security < 0.05 then 'null'
      else 'low'
    end as "securityArea",
    constellation."constellationName" as "constellationName",
    region."regionName" as "regionName",
    system."solarSystemName" as "stageSystemName"
  from spawns spawn
  join solar_systems system on system."constellationID" = spawn."constellationId"
  join mapconstellations constellation on constellation."constellationID" = spawn."constellationId"
  join mapregions region on region."regionID" = constellation."regionID"
  where spawn.active = false
    and system."systemType" = 'Staging'
    and spawn.ended_at is not null
  order by spawn.ended_at desc
`);

const hydrateActiveSpawns = (spawnRows: Row[], stationRows: Row[], influenceRows: Row[], stateRows: Row[]): Spawn[] => {
  const stationsBySystem = new Map<number, Station[]>();
  for (const row of stationRows) {
    const systemId = number(row.systemId);
    const stations = stationsBySystem.get(systemId) ?? [];
    stations.push({
      id: number(row.id),
      name: text(row.name),
      hasRepairService: bool(row.hasRepairService),
    });
    stationsBySystem.set(systemId, stations);
  }

  const influenceBySpawn = new Map<number, number[]>();
  for (const row of influenceRows) {
    const spawnId = number(row.spawnId);
    const values = influenceBySpawn.get(spawnId) ?? [];
    values.push(Number(row.influence) * 100);
    influenceBySpawn.set(spawnId, values);
  }

  const stateBySpawn = new Map(stateRows.map(row => [number(row.spawnId), text(row.date)]));
  const groups = new Map<number, {row: Row; constellation: Constellation}>();

  for (const row of spawnRows) {
    const spawnId = number(row.spawnId);
    let group = groups.get(spawnId);
    if (!group) {
      group = {
        row,
        constellation: {
          id: number(row.constellationId),
          name: text(row.constellationName),
          region: {
            id: number(row.regionId),
            name: text(row.regionName),
          },
          systems: [],
        },
      };
      groups.set(spawnId, group);
    }

    const security = displaySecurity(row.security);
    const systemId = number(row.systemId);
    group.constellation.systems.push({
      id: systemId,
      name: text(row.systemName),
      security,
      securityArea: securityArea(security),
      size: displaySize(row.systemSize),
      type: text(row.systemType || 'not known'),
      sovereigntyHolderID: number(row.sovereigntyHolderID),
      sovereigntyHolderName: text(row.sovereigntyHolderName),
      stations: stationsBySystem.get(systemId) ?? [],
    });
  }

  return [...groups.entries()].map(([spawnId, {row, constellation}]) => {
    const newestFirst = influenceBySpawn.get(spawnId) ?? [];
    const values = [...newestFirst].reverse();
    const stagingSystem = constellation.systems.find(system => system.type === 'Staging') ?? constellation.systems[0];

    return {
      id: spawnId,
      state: text(row.spawnState),
      active: bool(row.spawnActive),
      boss: bool(row.spawnHasBoss),
      establishedAt: text(row.spawnEstablishedAt),
      endedAt: row.spawnEndedAt === null ? null : text(row.spawnEndedAt),
      influence: Number(row.spawnInfluence ?? 0),
      constellation,
      stagingSystem,
      influenceLogArray: [...Array(Math.max(0, 72 - values.length)).fill(null), ...values],
      lastStateChangeDate: stateBySpawn.get(spawnId) ?? new Date().toISOString(),
    };
  });
};

const getRespawnWindows = (activeSpawns: Spawn[], endedRows: Row[]): IncursionRespawnWindow[] => {
  const activeCounts = activeSpawns.reduce<Record<'high' | 'low' | 'null', number>>((acc, spawn) => {
    if (isKnownSecurityArea(spawn.stagingSystem.securityArea)) {
      acc[spawn.stagingSystem.securityArea] += 1;
    }

    return acc;
  }, {high: 0, low: 0, null: 0});

  const mergedRows = [
    ...seededRespawnRows,
    ...endedRows.filter(row => !seededRespawnRows.some(seed => seed.endedAt === String(row.endedAt) && seed.constellationName === String(row.constellationName))),
  ];

  const endedByArea = mergedRows.reduce<Record<'high' | 'low' | 'null', Row[]>>((acc, row) => {
    const area = String(row.securityArea);
    if (!isKnownSecurityArea(area)) return acc;

    acc[area].push(row as Row);
    return acc;
  }, {high: [], low: [], null: []});

  const result: IncursionRespawnWindow[] = [];

  for (const slot of respawnSlotConfig) {
    const activeSlots = activeCounts[slot.securityArea];
    const missingSlots = Math.max(0, slot.totalSlots - activeSlots);
    const historyLimit = slot.securityArea === 'null' ? Math.min(slot.totalSlots, endedByArea[slot.securityArea].length) : missingSlots;

    if (historyLimit === 0) continue;

    const history = endedByArea[slot.securityArea].slice(0, historyLimit);

    history.forEach((row, index) => {
      const endedAt = isoDate(row.endedAt);
      const spawnedAt = isoDate(row.spawnedAt);
      const startAt = endedAt === null ? null : new Date(endedAt).getTime();
      result.push({
        securityArea: slot.securityArea,
        label: slot.label,
        totalSlots: slot.totalSlots,
        activeSlots,
        missingSlots,
        slotIndex: index + 1,
        slotCount: slot.totalSlots,
        constellationName: row.constellationName === null ? null : String(row.constellationName),
        regionName: row.regionName === null ? null : String(row.regionName),
        stageSystemName: row.stageSystemName === null ? null : String(row.stageSystemName),
        spawnedAt,
        endedAt,
        windowOpensAt: startAt === null ? null : new Date(startAt + respawnDelay).toISOString(),
        windowClosesAt: startAt === null ? null : new Date(startAt + respawnDelay + respawnWindow).toISOString(),
        isEstimated: false,
      });
    });

    while (result.filter(window => window.securityArea === slot.securityArea).length < slot.totalSlots) {
      const index = result.filter(window => window.securityArea === slot.securityArea).length;

      if (slot.securityArea !== 'null' || history.length === 0) {
        result.push({
          securityArea: slot.securityArea,
          label: slot.label,
          totalSlots: slot.totalSlots,
          activeSlots,
          missingSlots,
          slotIndex: index + 1,
          slotCount: slot.totalSlots,
          constellationName: null,
          regionName: null,
          stageSystemName: null,
          spawnedAt: null,
          endedAt: null,
          windowOpensAt: null,
          windowClosesAt: null,
          isEstimated: false,
        });
        continue;
      }

      const template = history[0];
      const endedAt = isoDate(template.endedAt);
      const spawnedAt = isoDate(template.spawnedAt);
      const startAt = endedAt === null ? null : new Date(endedAt).getTime();
      result.push({
        securityArea: slot.securityArea,
        label: slot.label,
        totalSlots: slot.totalSlots,
        activeSlots,
        missingSlots,
        slotIndex: index + 1,
        slotCount: slot.totalSlots,
        constellationName: template.constellationName === null ? null : String(template.constellationName),
        regionName: template.regionName === null ? null : String(template.regionName),
        stageSystemName: template.stageSystemName === null ? null : String(template.stageSystemName),
        spawnedAt,
        endedAt,
        windowOpensAt: startAt === null ? null : new Date(startAt + respawnDelay).toISOString(),
        windowClosesAt: startAt === null ? null : new Date(startAt + respawnDelay + respawnWindow).toISOString(),
        isEstimated: true,
      });
    }
  }

  return result;
};

export const getActiveSpawns = async (): Promise<ActiveSpawnsQuery> => {
  const source = await ensureAppDataSource();

  if (!(await hasTable(source, 'spawns'))) {
    return {activeSpawns: [], lastHighSecSpawn: {date: null}, respawnWindows: []};
  }

  const [spawnRows, stationRows, influenceRows, stateRows, endedRows] = await Promise.all([
    activeSpawnRows(source),
    activeStationRows(source),
    activeInfluenceRows(source),
    activeStateRows(source),
    endedSpawnRows(source),
  ]);

  const activeSpawns = hydrateActiveSpawns(spawnRows, stationRows, influenceRows, stateRows);
  const respawnWindows = getRespawnWindows(activeSpawns, endedRows);
  const hasActiveHighSec = activeSpawns.some(spawn => spawn.stagingSystem.security >= 0.5);
  const lastHighSecEndedAt = hasActiveHighSec
    ? null
    : isoDate(endedRows.find(row => row.securityArea === 'high')?.endedAt);

  return {
    activeSpawns,
    lastHighSecSpawn: {date: lastHighSecEndedAt},
    respawnWindows,
  };
};

export const getRatGroups = async (): Promise<RatGroupsQuery> => {
  const source = await ensureAppDataSource();

  if (!(await hasTable(source, 'rat_groups'))) {
    return {ratGroups: []};
  }

  const rows = await queryRows(source, `
    select id, name, rats
    from rat_groups
    order by name
  `);

  return {
    ratGroups: rows.map(row => ({
      id: text(row.id),
      name: text(row.name),
      rats: JSON.parse(text(row.rats || '[]')) as Rat[],
    })),
  };
};

export const getSpawnLogs = async (page = 1): Promise<SpawnLogsQuery> => {
  const source = await ensureAppDataSource();

  if (!(await hasTable(source, 'spawn_logs'))) {
    return {spawnLogs: {items: [], total: 0}};
  }

  const perPage = 20;
  const offset = Math.max(0, page - 1) * perPage;
  const total = number(await scalar<number>(source, 'select count(*) from spawn_logs') ?? 0);
  const rows = await queryRows(source, `
    select
      log.id as "logId",
      log.state as "logState",
      log.date as "logDate",
      spawn.id as "spawnId",
      spawn.state as "spawnState",
      spawn.active,
      spawn."hasBoss",
      spawn.established_at,
      spawn.ended_at,
      spawn.influence,
      spawn."constellationId",
      constellation."constellationName",
      region."regionID",
      region."regionName",
      system."solarSystemID",
      system."solarSystemName",
      system."sovereigntyHolderID",
      system."sovereigntyHolderName",
      system."systemSize",
      system.security,
      system."systemType"
    from spawn_logs log
    join spawns spawn on spawn.id = log.spawn_id
    join mapconstellations constellation on constellation."constellationID" = spawn."constellationId"
    join mapregions region on region."regionID" = constellation."regionID"
    left join solar_systems system on system."constellationID" = constellation."constellationID" and system."systemType" = 'Staging'
    order by log.date desc
    limit ?
    offset ?
  `, [perPage, offset]);

  return {
    spawnLogs: {
      items: rows.map(row => {
        const security = displaySecurity(row.security);
        const stagingSystem = {
          id: number(row.solarSystemID),
          name: text(row.solarSystemName),
          security,
          securityArea: securityArea(security),
          size: displaySize(row.systemSize),
          type: text(row.systemType || 'Staging'),
          sovereigntyHolderID: number(row.sovereigntyHolderID),
          sovereigntyHolderName: text(row.sovereigntyHolderName),
          stations: [],
        };

        return {
          id: number(row.logId),
          state: text(row.logState),
          date: text(row.logDate),
          spawn: {
            id: number(row.spawnId),
            state: text(row.spawnState),
            active: bool(row.active),
            boss: bool(row.hasBoss),
            establishedAt: text(row.established_at),
            endedAt: row.ended_at === null ? null : text(row.ended_at),
            influence: number(row.influence),
            constellation: {
              id: number(row.constellationId),
              name: text(row.constellationName),
              region: {
                id: number(row.regionID),
                name: text(row.regionName),
              },
              systems: [stagingSystem],
            },
            stagingSystem,
            influenceLogArray: [],
            lastStateChangeDate: text(row.logDate),
          },
        };
      }),
      total,
    },
  };
};

export const getActiveCommunities = async (): Promise<ActiveCommunitiesQuery> => {
  const source = await ensureAppDataSource();

  if (!(await hasTable(source, 'communities'))) {
    return {activeCommunities: []};
  }

  const rows = await queryRows(source, `
    select *
    from communities
    where active = true
    order by "communityName"
  `);

  return {
    activeCommunities: rows.map(row => ({
      id: number(row.id),
      name: text(row.communityName),
      tag: text(row.communityTag),
      channel: text(row.channel),
      language: text(row.language),
      tank: text(row.tank),
      timezone: text(row.timezone),
      hq: bool(row.isHQ),
      as: bool(row.isAS),
      vg: bool(row.isVG),
    })),
  };
};

