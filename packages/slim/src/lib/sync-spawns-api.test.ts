import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockEnsureAppDataSource, mockEnsurePerformanceIndexes, mockRecordSuccessfulSpawnSync, mockUpdateSpawns} = vi.hoisted(() => ({
  mockEnsureAppDataSource: vi.fn(),
  mockEnsurePerformanceIndexes: vi.fn(),
  mockRecordSuccessfulSpawnSync: vi.fn(),
  mockUpdateSpawns: vi.fn(),
}));

vi.mock('./data-source', () => ({ensureAppDataSource: mockEnsureAppDataSource}));
vi.mock('./performance-indexes', () => ({ensurePerformanceIndexes: mockEnsurePerformanceIndexes}));
vi.mock('./sync-status', () => ({recordSuccessfulSpawnSync: mockRecordSuccessfulSpawnSync}));
vi.mock('../sync/commands/updateSpawns', () => ({updateSpawns: mockUpdateSpawns}));

import {runSpawnSync} from '../pages/api/cron/sync-spawns';

describe('runSpawnSync', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    mockEnsureAppDataSource.mockResolvedValue({});
    mockEnsurePerformanceIndexes.mockResolvedValue(undefined);
    mockRecordSuccessfulSpawnSync.mockResolvedValue(undefined);
    mockUpdateSpawns.mockResolvedValue(undefined);
  });

  it('updates indexes and data before revalidating the homepage', async () => {
    const revalidate = vi.fn().mockResolvedValue(undefined);
    const json = vi.fn();
    const response = {
      revalidate,
      setHeader: vi.fn(),
      status: vi.fn().mockReturnValue({json}),
    };

    await runSpawnSync({method: 'GET', headers: {}} as never, response as never);

    expect(mockEnsurePerformanceIndexes).toHaveBeenCalledOnce();
    expect(mockUpdateSpawns).toHaveBeenCalledWith(false);
    expect(mockRecordSuccessfulSpawnSync).toHaveBeenCalledWith({});
    expect(revalidate).toHaveBeenCalledWith('/');
    expect(mockUpdateSpawns.mock.invocationCallOrder[0]).toBeLessThan(revalidate.mock.invocationCallOrder[0]);
    expect(mockRecordSuccessfulSpawnSync.mock.invocationCallOrder[0]).toBeLessThan(revalidate.mock.invocationCallOrder[0]);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(expect.objectContaining({ok: true}));
  });
});
