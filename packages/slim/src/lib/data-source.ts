import {DataSource} from 'typeorm';
import {getDatabaseSsl, getDatabaseUrl, getDbFile, getDbMode} from './config';
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
  synchronize: true,
  logging: false,
  entities,
  migrations: [],
  subscribers: [],
};

export const AppDataSource = getDbMode() === 'supabase'
  ? new DataSource({
      type: 'postgres',
      url: getDatabaseUrl(),
      ssl: getDatabaseSsl(),
      ...commonOptions,
    })
  : new DataSource({
      type: 'sqljs',
      location: getDbFile(),
      autoSave: true,
      ...commonOptions,
    });

export const ensureAppDataSource = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  return AppDataSource;
};
