import {DataSource} from 'typeorm';
import {getDatabasePoolMax, getDatabaseSslMode, getDatabaseUrl, getDbFile, getDbMode, getDbSynchronize} from './config';
import {Community} from '../sync/models/Community';
import {Constellation} from '../sync/models/Constellation';
import {InfluenceLogEntry} from '../sync/models/InfluenceLogEntry';
import {OperationService} from '../sync/models/OperationService';
import {RatGroup} from '../sync/models/Rats';
import {Region} from '../sync/models/Region';
import {Spawn} from '../sync/models/Spawn';
import {SpawnLog} from '../sync/models/SpawnLog';
import {Station} from '../sync/models/Station';
import {System} from '../sync/models/System';

const entities = [
  Community,
  Constellation,
  InfluenceLogEntry,
  OperationService,
  RatGroup,
  Region,
  Spawn,
  SpawnLog,
  Station,
  System,
];

const commonOptions = {
  synchronize: getDbSynchronize(),
  logging: false,
  entities,
  migrations: [],
  subscribers: [],
};

const sslMode = getDatabaseSslMode();
const ssl = sslMode === 'require'
  ? {rejectUnauthorized: false}
  : sslMode === 'disable'
    ? false
    : sslMode === 'verify-full'
      ? true
      : undefined;

export const AppDataSource = getDbMode() === 'supabase'
  ? new DataSource({
      type: 'postgres',
      url: getDatabaseUrl(),
      ssl,
      extra: {
        max: getDatabasePoolMax(),
        idleTimeoutMillis: 5000,
        connectionTimeoutMillis: 10000,
      },
      ...commonOptions,
    })
  : new DataSource({
      type: 'sqljs',
      location: getDbFile(),
      autoSave: true,
      ...commonOptions,
});

let initializationPromise: Promise<DataSource> | null = null;

export const ensureAppDataSource = async () => {
  if (!AppDataSource.isInitialized) {
    initializationPromise ??= AppDataSource.initialize().catch(error => {
      initializationPromise = null;
      throw error;
    });
    await initializationPromise;
  }

  return AppDataSource;
};
