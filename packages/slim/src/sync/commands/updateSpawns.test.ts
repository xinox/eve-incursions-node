import {beforeEach, describe, expect, it, vi} from 'vitest';

const {
  mockConstellationFind,
  mockEnsureConstellationData,
  mockEsiRequest,
  mockManagerSave,
  mockSpawnFind,
  mockSpawnFindOne,
  mockSystemFind,
} = vi.hoisted(() => ({
  mockConstellationFind: vi.fn(),
  mockEnsureConstellationData: vi.fn(),
  mockEsiRequest: vi.fn(),
  mockManagerSave: vi.fn(),
  mockSpawnFind: vi.fn(),
  mockSpawnFindOne: vi.fn(),
  mockSystemFind: vi.fn(),
}));

vi.mock('../lib/esi', () => ({esiRequest: mockEsiRequest}));
vi.mock('./ensureConstellationData', () => ({ensureConstellationData: mockEnsureConstellationData}));
vi.mock('../lib/data-source', () => ({
  AppDataSource: {
    manager: {
      transaction: vi.fn(async callback => callback({save: mockManagerSave})),
    },
  },
}));
vi.mock('../models/Constellation', () => ({
  Constellation: class MockConstellation {
    static find = mockConstellationFind;
  },
}));
vi.mock('../models/System', () => ({
  System: class MockSystem {
    static find = mockSystemFind;
    static findOne = vi.fn();
    static findOneBy = vi.fn();
  },
}));
vi.mock('../models/Spawn', () => ({
  Spawn: class MockSpawn {
    static find = mockSpawnFind;
    static findOne = mockSpawnFindOne;
  },
}));
vi.mock('../models/SpawnLog', () => ({SpawnLog: class MockSpawnLog {}}));
vi.mock('../models/InfluenceLogEntry', () => ({InfluenceLogEntry: class MockInfluenceLogEntry {}}));

import {updateSpawns} from './updateSpawns';

describe('updateSpawns static data repair', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockEsiRequest.mockResolvedValue([{
      constellation_id: 20000001,
      faction_id: 500019,
      has_boss: false,
      infested_solar_systems: [30000001, 30000002, 30000003],
      influence: 0.5,
      staging_solar_system_id: 30000003,
      state: 'established',
      type: 'Incursion',
    }]);
    mockConstellationFind.mockResolvedValue([{id: 20000001}]);
    mockSpawnFindOne.mockResolvedValue({id: 1, state: 'Established'});
    mockSpawnFind.mockResolvedValue([]);
  });

  it('repairs infested systems when only the staging system is known', async () => {
    mockSystemFind.mockResolvedValue([{id: 30000003}]);

    await updateSpawns();

    expect(mockEnsureConstellationData).toHaveBeenCalledWith(
      [20000001],
      [30000001, 30000002],
    );
  });

  it('skips ESI system fetches when every infested system is known', async () => {
    mockSystemFind.mockResolvedValue([
      {id: 30000001},
      {id: 30000002},
      {id: 30000003},
    ]);

    await updateSpawns();

    expect(mockEnsureConstellationData).not.toHaveBeenCalled();
  });
});
