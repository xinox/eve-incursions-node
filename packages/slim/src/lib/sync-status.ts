import type {DataSource} from 'typeorm';

export const SPAWN_SYNC_NAME = 'spawns';

export type SpawnSyncStatusData = {
  lastUpdatedAt: string | null;
};

const setupBySource = new WeakMap<DataSource, Promise<void>>();

const ensureSyncStatusTable = async (source: DataSource) => {
  const existing = setupBySource.get(source);
  if (existing) return existing;

  const setup = (async () => {
    const timestampType = source.options.type === 'postgres' ? 'timestamptz' : 'datetime';
    await source.query(`
      create table if not exists app_sync_status (
        name text primary key,
        updated_at ${timestampType} not null
      )
    `);

    if (source.options.type === 'postgres') {
      await source.query('alter table app_sync_status enable row level security');
    }
  })().catch(error => {
    setupBySource.delete(source);
    throw error;
  });

  setupBySource.set(source, setup);
  return setup;
};

export const recordSuccessfulSpawnSync = async (source: DataSource, syncedAt = new Date()) => {
  await ensureSyncStatusTable(source);

  const placeholder = source.options.type === 'postgres' ? '$' : '?';
  const values = placeholder === '$' ? '($1, $2)' : '(?, ?)';
  await source.query(
    `insert into app_sync_status (name, updated_at) values ${values}
      on conflict (name) do update set updated_at = excluded.updated_at`,
    [SPAWN_SYNC_NAME, syncedAt.toISOString()],
  );
};

const isMissingTableError = (error: unknown) => {
  if (typeof error !== 'object' || error === null) return false;
  const databaseError = error as {code?: string; message?: string};
  return databaseError.code === '42P01' || databaseError.message?.includes('no such table') === true;
};

export const getLastSuccessfulSpawnSync = async (source: DataSource): Promise<string | null> => {
  let rows: Array<{updated_at?: unknown}>;

  try {
    const placeholder = source.options.type === 'postgres' ? '$1' : '?';
    rows = await source.query(
      `select updated_at from app_sync_status where name = ${placeholder} limit 1`,
      [SPAWN_SYNC_NAME],
    );
  } catch (error) {
    if (isMissingTableError(error)) return null;
    throw error;
  }

  const value = rows[0]?.updated_at;
  if (!(typeof value === 'string' || value instanceof Date)) return null;
  const timestamp = new Date(value);
  return Number.isNaN(timestamp.getTime()) ? null : timestamp.toISOString();
};
