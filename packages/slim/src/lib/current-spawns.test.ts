import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockEnsureAppDataSource, mockGetActiveSpawns, mockGetLastSuccessfulSpawnSync} = vi.hoisted(() => ({
  mockEnsureAppDataSource: vi.fn(),
  mockGetActiveSpawns: vi.fn(),
  mockGetLastSuccessfulSpawnSync: vi.fn(),
}));

vi.mock('./data-source', () => ({ensureAppDataSource: mockEnsureAppDataSource}));
vi.mock('./db', () => ({getActiveSpawns: mockGetActiveSpawns}));
vi.mock('./sync-status', () => ({getLastSuccessfulSpawnSync: mockGetLastSuccessfulSpawnSync}));

import {getCurrentSpawnsData} from './current-spawns';

describe('getCurrentSpawnsData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockEnsureAppDataSource.mockResolvedValue({name: 'source'});
    mockGetActiveSpawns.mockResolvedValue({activeSpawns: [], lastHighSecSpawn: {date: null}, respawnWindows: []});
    mockGetLastSuccessfulSpawnSync.mockResolvedValue('2026-08-05T10:15:00.000Z');
  });

  it('combines spawn data with the cron heartbeat', async () => {
    await expect(getCurrentSpawnsData()).resolves.toEqual({
      activeSpawns: [],
      lastHighSecSpawn: {date: null},
      respawnWindows: [],
      lastUpdatedAt: '2026-08-05T10:15:00.000Z',
    });
    expect(mockGetLastSuccessfulSpawnSync).toHaveBeenCalledWith({name: 'source'});
  });
});
