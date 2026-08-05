import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockConstellationFindOneBy, mockManagerSave, mockSystemFind} = vi.hoisted(() => ({
  mockConstellationFindOneBy: vi.fn(),
  mockManagerSave: vi.fn(),
  mockSystemFind: vi.fn(),
}));

vi.mock('../models/Constellation', () => ({
  Constellation: class MockConstellation {
    static findOneBy = mockConstellationFindOneBy;
  },
}));
vi.mock('../models/Region', () => ({Region: class MockRegion {}}));
vi.mock('../models/System', () => ({
  System: class MockSystem {
    static find = mockSystemFind;
  },
}));
vi.mock('../lib/esi', () => ({
  fetchConstellation: vi.fn(),
  fetchRegion: vi.fn(),
  fetchSystem: vi.fn(),
}));
vi.mock('../lib/data-source', () => ({
  AppDataSource: {
    manager: {
      transaction: vi.fn(async callback => callback({save: mockManagerSave})),
    },
  },
}));

import {ensureConstellationData} from './ensureConstellationData';

describe('ensureConstellationData system sizes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockConstellationFindOneBy.mockResolvedValue({id: 20000649});
  });

  it('repairs a stored zero size from static universe data', async () => {
    const system = {id: 30004786, size: 0};
    mockSystemFind.mockResolvedValue([system]);

    await ensureConstellationData([20000649], [system.id]);

    expect(system.size).toBe(33);
    expect(mockManagerSave).toHaveBeenCalledWith([system]);
  });
});
