import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockEnsureAppDataSource, mockQuery} = vi.hoisted(() => ({
  mockEnsureAppDataSource: vi.fn(),
  mockQuery: vi.fn(),
}));

vi.mock('./data-source', () => ({ensureAppDataSource: mockEnsureAppDataSource}));

import {getActiveSpawns} from './db';

const source = {
  options: {type: 'postgres'},
  query: mockQuery,
};

describe('getActiveSpawns', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockEnsureAppDataSource.mockResolvedValue(source);
    mockQuery.mockImplementation(async (sql: string) => {
      if (sql.includes('information_schema.tables')) return [{count: 1}];

      if (sql.includes('spawn.id as "spawnId"')) {
        const spawn = {
          spawnId: 10,
          spawnState: 'Established',
          spawnActive: true,
          spawnHasBoss: false,
          spawnEstablishedAt: '2026-08-04T12:00:00.000Z',
          spawnEndedAt: null,
          spawnInfluence: 0.5,
          constellationId: 20,
          constellationName: 'Test Constellation',
          regionId: 30,
          regionName: 'Test Region',
          sovereigntyHolderID: 0,
          sovereigntyHolderName: '',
          systemSize: 10,
          security: 0.8,
        };
        return [
          {...spawn, systemId: 40, systemName: 'Alpha', systemType: 'Vanguard'},
          {...spawn, systemId: 41, systemName: 'Bravo', systemType: 'Staging'},
        ];
      }

      if (sql.includes('from sta_stations station')) {
        return [{systemId: 41, id: 50, name: 'Test Station', hasRepairService: true}];
      }

      if (sql.includes('from spawn_influence_logs influence')) {
        return [
          {spawnId: 10, influence: 0.5},
          {spawnId: 10, influence: 0.4},
        ];
      }

      if (sql.includes('from spawn_logs log')) {
        return [{spawnId: 10, date: '2026-08-04T13:00:00.000Z'}];
      }

      if (sql.includes('where spawn.active = false')) return [];
      throw new Error(`Unexpected query: ${sql}`);
    });
  });

  it('hydrates all active spawn data with six batched queries', async () => {
    const result = await getActiveSpawns();

    expect(mockQuery).toHaveBeenCalledTimes(6);
    expect(result.activeSpawns).toHaveLength(1);
    expect(result.activeSpawns[0]).toMatchObject({
      id: 10,
      stagingSystem: {
        id: 41,
        name: 'Bravo',
        stations: [{id: 50, name: 'Test Station', hasRepairService: true}],
      },
      constellation: {
        systems: [
          {id: 40, name: 'Alpha', type: 'Vanguard'},
          {id: 41, name: 'Bravo', type: 'Staging'},
        ],
      },
      lastStateChangeDate: '2026-08-04T13:00:00.000Z',
    });
    expect(result.activeSpawns[0].influenceLogArray).toHaveLength(72);
    expect(result.activeSpawns[0].influenceLogArray.slice(-2)).toEqual([40, 50]);
  });

  it('returns empty data when the spawn table is absent', async () => {
    mockQuery.mockResolvedValueOnce([{count: 0}]);

    await expect(getActiveSpawns()).resolves.toEqual({
      activeSpawns: [],
      lastHighSecSpawn: {date: null},
      respawnWindows: [],
    });
    expect(mockQuery).toHaveBeenCalledOnce();
  });
});
