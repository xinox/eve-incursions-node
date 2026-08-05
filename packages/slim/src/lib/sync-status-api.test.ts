import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockEnsureAppDataSource, mockGetLastSuccessfulSpawnSync} = vi.hoisted(() => ({
  mockEnsureAppDataSource: vi.fn(),
  mockGetLastSuccessfulSpawnSync: vi.fn(),
}));

vi.mock('./data-source', () => ({ensureAppDataSource: mockEnsureAppDataSource}));
vi.mock('./sync-status', () => ({getLastSuccessfulSpawnSync: mockGetLastSuccessfulSpawnSync}));

import {spawnSyncStatusHandler} from '../pages/api/spawns/status';

const createResponse = () => {
  const json = vi.fn();
  const response = {
    setHeader: vi.fn(),
    status: vi.fn().mockReturnValue({json}),
  };
  return {json, response};
};

describe('spawnSyncStatusHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockEnsureAppDataSource.mockResolvedValue({name: 'source'});
    mockGetLastSuccessfulSpawnSync.mockResolvedValue('2026-08-05T10:15:00.000Z');
  });

  it('returns the latest heartbeat with a short CDN cache', async () => {
    const {json, response} = createResponse();

    await spawnSyncStatusHandler({method: 'GET'} as never, response as never);

    expect(mockGetLastSuccessfulSpawnSync).toHaveBeenCalledWith({name: 'source'});
    expect(response.setHeader).toHaveBeenCalledWith(
      'Cache-Control',
      'public, max-age=0, s-maxage=30, stale-while-revalidate=30',
    );
    expect(response.status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith({lastUpdatedAt: '2026-08-05T10:15:00.000Z'});
  });

  it('rejects non-GET requests', async () => {
    const {json, response} = createResponse();

    await spawnSyncStatusHandler({method: 'POST'} as never, response as never);

    expect(mockEnsureAppDataSource).not.toHaveBeenCalled();
    expect(response.setHeader).toHaveBeenCalledWith('Allow', 'GET');
    expect(response.status).toHaveBeenCalledWith(405);
    expect(json).toHaveBeenCalledWith({error: 'Method not allowed'});
  });
});
