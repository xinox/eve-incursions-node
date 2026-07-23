import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import {AppDataSource} from '../lib/data-source';
import {Constellation} from '../models/Constellation';
import {OperationService} from '../models/OperationService';
import {Region} from '../models/Region';
import {Station} from '../models/Station';
import {System} from '../models/System';

const SEED_PATH = path.resolve(__dirname, '../../../../../seed/eve-incursions-seed.sql.gz');

type SqlValue = number | string | null;

const extractInsertValues = (sql: string, table: string) => {
  const marker = `INSERT INTO \`${table}\` VALUES `;
  const start = sql.indexOf(marker);
  if (start === -1) {
    throw new Error(`Could not find INSERT block for ${table}`);
  }

  const end = sql.indexOf(';', start);
  if (end === -1) {
    throw new Error(`Could not find end of INSERT block for ${table}`);
  }

  return sql.slice(start + marker.length, end);
};

const parseSqlRows = (input: string): SqlValue[][] => {
  const rows: SqlValue[][] = [];
  let i = 0;

  const skipWhitespace = () => {
    while (i < input.length && /\s/.test(input[i])) i += 1;
  };

  const parseQuotedString = () => {
    i += 1;
    let value = '';

    while (i < input.length) {
      const char = input[i];

      if (char === '\\') {
        const next = input[i + 1];
        if (next !== undefined) {
          value += next;
          i += 2;
          continue;
        }
      }

      if (char === "'") {
        if (input[i + 1] === "'") {
          value += "'";
          i += 2;
          continue;
        }

        i += 1;
        return value;
      }

      value += char;
      i += 1;
    }

    throw new Error('Unterminated SQL string');
  };

  const parseBareValue = () => {
    const start = i;
    while (i < input.length && input[i] !== ',' && input[i] !== ')') i += 1;
    const raw = input.slice(start, i).trim();

    if (raw === 'NULL' || raw === '') return null;

    const numeric = Number(raw);
    return Number.isNaN(numeric) ? raw : numeric;
  };

  while (i < input.length) {
    skipWhitespace();
    if (i >= input.length) break;

    if (input[i] === ',') {
      i += 1;
      continue;
    }

    if (input[i] !== '(') {
      i += 1;
      continue;
    }

    i += 1;
    const row: SqlValue[] = [];

    while (i < input.length) {
      skipWhitespace();
      row.push(input[i] === "'" ? parseQuotedString() : parseBareValue());
      skipWhitespace();

      if (input[i] === ',') {
        i += 1;
        continue;
      }

      if (input[i] === ')') {
        i += 1;
        break;
      }
    }

    rows.push(row);
  }

  return rows;
};

const loadSeedRows = () => {
  const dump = zlib.gunzipSync(fs.readFileSync(SEED_PATH)).toString('utf8');

  return {
    regions: parseSqlRows(extractInsertValues(dump, 'mapregions')),
    constellations: parseSqlRows(extractInsertValues(dump, 'mapconstellations')),
    systems: parseSqlRows(extractInsertValues(dump, 'solar_systems')),
    stations: parseSqlRows(extractInsertValues(dump, 'sta_stations')),
    operationServices: parseSqlRows(extractInsertValues(dump, 'sta_operation_services')),
  };
};

export const importSeedStaticData = async () => {
  const existingStations = await Station.count();
  const existingServices = await OperationService.count();

  if (existingStations > 0 && existingServices > 0) {
    console.log('Static seed data already present, skipping import.');
    return;
  }

  console.log('Importing static universe data from seed dump...');
  const rows = loadSeedRows();

  await AppDataSource.manager.transaction(async manager => {
    await manager.save(Region, rows.regions.map((row) => ({
      id: Number(row[0]),
      name: String(row[1] ?? ''),
    })), { chunk: 500, reload: false });

    await manager.save(Constellation, rows.constellations.map((row) => ({
      regionId: Number(row[0]),
      id: Number(row[1]),
      name: String(row[2] ?? ''),
    })), { chunk: 500, reload: false });

    await manager.save(System, rows.systems.map((row) => ({
      constellationId: Number(row[1]),
      id: Number(row[2]),
      name: String(row[3] ?? ''),
      security: Number(row[21] ?? 0),
      type: String(row[26] ?? 'not known'),
      sovereigntyHolderName: String(row[27] ?? ''),
      sovereigntyHolderID: Number(row[28] ?? 0),
      size: Number(row[29] ?? 0),
      isIsland: Boolean(row[30] ?? 0),
    })), { chunk: 500, reload: false });

    await manager.save(Station, rows.stations.map((row) => ({
      id: String(row[0]),
      operationID: Number(row[5]),
      solarSystemID: Number(row[8]),
      name: String(row[11] ?? ''),
    })), { chunk: 500, reload: false });

    await manager.query('DELETE FROM "sta_operation_services"');
    await manager.save(OperationService, rows.operationServices.map((row) => ({
      operationId: Number(row[0]),
      serviceId: Number(row[1]),
    })), { chunk: 500, reload: false });
  });

  console.log('Static universe data import complete.');
};
