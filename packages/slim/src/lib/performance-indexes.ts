import {DataSource} from 'typeorm';
import {ensureAppDataSource} from './data-source';

export const PERFORMANCE_INDEX_SQL = [
  'create index if not exists idx_spawns_active_established on spawns (established_at desc) where active = true',
  'create index if not exists idx_spawns_inactive_ended on spawns (ended_at desc) where active = false and ended_at is not null',
  'create index if not exists idx_solar_systems_constellation on solar_systems ("constellationID")',
  'create index if not exists idx_stations_solar_system on sta_stations ("solarSystemID")',
  'create index if not exists idx_influence_logs_spawn_latest on spawn_influence_logs (spawn_id, id desc)',
  'create index if not exists idx_spawn_logs_spawn_latest on spawn_logs (spawn_id, date desc, id desc)',
] as const;

const initializationBySource = new WeakMap<DataSource, Promise<void>>();

export const ensurePerformanceIndexes = async (providedSource?: DataSource) => {
  const source = providedSource ?? await ensureAppDataSource();
  const existing = initializationBySource.get(source);
  if (existing) return existing;

  const initialization = (async () => {
    for (const sql of PERFORMANCE_INDEX_SQL) {
      await source.query(sql);
    }
  })().catch(error => {
    initializationBySource.delete(source);
    throw error;
  });

  initializationBySource.set(source, initialization);
  return initialization;
};
