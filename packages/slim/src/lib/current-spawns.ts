import type {ActiveSpawnsQuery} from './graphql';
import {ensureAppDataSource} from './data-source';
import {getActiveSpawns} from './db';
import {getLastSuccessfulSpawnSync} from './sync-status';

export type CurrentSpawnsData = ActiveSpawnsQuery & {
  lastUpdatedAt: string | null;
};

export const getCurrentSpawnsData = async (): Promise<CurrentSpawnsData> => {
  const source = await ensureAppDataSource();
  const [spawns, lastUpdatedAt] = await Promise.all([
    getActiveSpawns(),
    getLastSuccessfulSpawnSync(source),
  ]);

  return {...spawns, lastUpdatedAt};
};
