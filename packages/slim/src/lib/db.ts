import {DataSource} from 'typeorm';
import {ensureAppDataSource} from './data-source';
import {ActiveCommunitiesQuery, ActiveSpawnsQuery, Constellation, IncursionRespawnWindow, Rat, RatGroupsQuery, SolarSystem, Spawn, SpawnLogsQuery, Station} from './graphql';

type SqlValue = string | number | Uint8Array | boolean | null;
type Row = Record<string, SqlValue>;

const respawnDelay = 12 * 60 * 60 * 1000;
const respawnWindow = 24 * 60 * 60 * 1000;

const respawnSlotConfig = [
  {securityArea: 'high' as const, label: 'High-Sec', totalSlots: 1},
  {securityArea: 'low' as const, label: 'Low-Sec', totalSlots: 1},
  {securityArea: 'null' as const, label: 'Null-Sec', totalSlots: 3},
];

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

const securityArea = (security: number): SolarSystem['securityArea'] => {
  if (security <= 0) return 'null';
  return security >= 0.5 ? 'high' : 'low';
};

const displaySecurity = (value: SqlValue) => {
  const security = Number(value ?? 0);
  return security > 0 ? Number(security.toFixed(1)) : Number(security.toFixed(2));
};

const displaySize = (value: SqlValue) => (Number(value ?? 0) + 17) * 2;

const getStations = async (source: DataSource, solarSystemId: number): Promise<Station[]> => {
  const rows = await queryRows(source, `
    select
      "stationID" as id,
      "stationName" as name,
      exists(
        select 1
        from sta_operation_services service
        where service."operationID" = station."operationID"
          and service."serviceID" = 4096
      ) as hasRepairService
    from sta_stations station
    where "solarSystemID" = ?
    order by "stationName"
  `, [solarSystemId]);

  return rows.map(row => ({
    id: number(row.id),
    name: text(row.name),
    hasRepairService: bool(row.hasRepairService),
  }));
};

const getSystems = async (source: DataSource, constellationId: number): Promise<SolarSystem[]> => {
  const rows = await queryRows(source, `
    select
      "solarSystemID" as id,
      "solarSystemName" as name,
      "sovereigntyHolderID",
      "sovereigntyHolderName",
      "systemSize" as size,
      security,
      "systemType" as type
    from solar_systems
    where "constellationID" = ?
    order by "solarSystemName"
  `, [constellationId]);

  return Promise.all(rows.map(async row => {
    const security = displaySecurity(row.security);
    return {
      id: number(row.id),
      name: text(row.name),
      security,
      securityArea: securityArea(security),
      size: displaySize(row.size),
      type: text(row.type || 'not known'),
      sovereigntyHolderID: number(row.sovereigntyHolderID),
      sovereigntyHolderName: text(row.sovereigntyHolderName),
      stations: await getStations(source, number(row.id)),
    };
  }));
};

const getConstellation = async (source: DataSource, constellationId: number): Promise<Constellation> => {
  const row = (await queryRows(source, `
    select
      constellation."constellationID" as id,
      constellation."constellationName" as name,
      region."regionID" as regionId,
      region."regionName" as regionName
    from mapconstellations constellation
    join mapregions region on region."regionID" = constellation."regionID"
    where constellation."constellationID" = ?
  `, [constellationId]))[0];

  return {
    id: number(row?.id),
    name: text(row?.name),
    region: {
      id: number(row?.regionId),
      name: text(row?.regionName),
    },
    systems: await getSystems(source, constellationId),
  };
};

const influenceLogArray = async (source: DataSource, spawnId: number): Promise<number[]> => {
  const values = (await queryRows(source, `
    select influence
    from spawn_influence_logs
    where spawn_id = ?
    order by date desc
    limit 72
  `, [spawnId])).map(row => Number(row.influence) * 100).reverse();

  return [...Array(Math.max(0, 72 - values.length)).fill(0), ...values];
};

const hydrateSpawn = async (source: DataSource, row: Row): Promise<Spawn> => {
  const constellation = await getConstellation(source, number(row.constellationId));
  const stagingSystem = constellation.systems.find(system => system.type === 'Staging') ?? constellation.systems[0];
  const lastStateChange = await scalar<string>(source, `
    select date
    from spawn_logs
    where spawn_id = ?
    order by date desc
    limit 1
  `, [number(row.id)]);

  return {
    id: number(row.id),
    state: text(row.state),
    active: bool(row.active),
    boss: bool(row.hasBoss),
    establishedAt: text(row.established_at),
    endedAt: row.ended_at === null ? null : text(row.ended_at),
    influence: Number(row.influence ?? 0),
    constellation,
    stagingSystem,
    influenceLogArray: await influenceLogArray(source, number(row.id)),
    lastStateChangeDate: lastStateChange ?? new Date().toISOString(),
  };
};

const getRespawnWindows = async (source: DataSource, activeSpawns: Spawn[]): Promise<IncursionRespawnWindow[]> => {
  if (!(await hasTable(source, 'spawns'))) return [];

  const activeCounts = activeSpawns.reduce<Record<'high' | 'low' | 'null', number>>((acc, spawn) => {
    acc[spawn.stagingSystem.securityArea] += 1;
    return acc;
  }, {high: 0, low: 0, null: 0});

  const endedRows = await queryRows(source, `
    select
      spawn.ended_at as endedAt,
      spawn.established_at as spawnedAt,
      case
        when system.security >= 0.45 then 'high'
        when system.security < 0.05 then 'null'
        else 'low'
      end as securityArea,
      constellation."constellationName" as constellationName,
      region."regionName" as regionName,
      system."solarSystemName" as stageSystemName
    from spawns spawn
    join solar_systems system on system."constellationID" = spawn."constellationId"
    join mapconstellations constellation on constellation."constellationID" = spawn."constellationId"
    join mapregions region on region."regionID" = constellation."regionID"
    where spawn.active = false
      and system."systemType" = 'Staging'
      and spawn.ended_at is not null
    order by spawn.ended_at desc
  `);

  const mergedRows = [
    ...seededRespawnRows,
    ...endedRows.filter(row => !seededRespawnRows.some(seed => seed.endedAt === String(row.endedAt) && seed.constellationName === String(row.constellationName))),
  ];

  const endedByArea = mergedRows.reduce<Record<'high' | 'low' | 'null', Row[]>>((acc, row) => {
    const area = String(row.securityArea) as 'high' | 'low' | 'null';
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
      const endedAt = row.endedAt === null ? null : String(row.endedAt);
      const startAt = endedAt === null ? null : new Date(endedAt.replace(' ', 'T') + 'Z').getTime();
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
        spawnedAt: row.spawnedAt === null ? null : String(row.spawnedAt),
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
      const endedAt = template.endedAt === null ? null : String(template.endedAt);
      const startAt = endedAt === null ? null : new Date(endedAt.replace(' ', 'T') + 'Z').getTime();
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
        spawnedAt: template.spawnedAt === null ? null : String(template.spawnedAt),
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

  const activeRows = await queryRows(source, `
    select *
    from spawns
    where active = true
    order by established_at desc
  `);

  const activeSpawns = await Promise.all(activeRows.map(row => hydrateSpawn(source, row)));
  const respawnWindows = await getRespawnWindows(source, activeSpawns);
  const hasActiveHighSec = activeSpawns.some(spawn => spawn.stagingSystem.security >= 0.5);

  const lastHighSecEndedAt = hasActiveHighSec ? null : await scalar<string>(source, `
    select spawn.ended_at
    from spawns spawn
    join solar_systems system on system."constellationID" = spawn."constellationId"
    where spawn.active = false
      and system."systemType" = 'Staging'
      and system.security >= 0.45
      and spawn.ended_at is not null
    order by spawn.ended_at desc
    limit 1
  `);

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
