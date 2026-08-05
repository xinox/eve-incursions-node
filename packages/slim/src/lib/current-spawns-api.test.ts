import {beforeEach, describe, expect, it, vi} from 'vitest';

const {mockGetCurrentSpawnsData} = vi.hoisted(() => ({mockGetCurrentSpawnsData: vi.fn()}));

vi.mock('./current-spawns', () => ({getCurrentSpawnsData: mockGetCurrentSpawnsData}));

import {currentSpawnsHandler} from '../pages/api/spawns/current';

const data = {
  activeSpawns: [],
  lastHighSecSpawn: {date: null},
  respawnWindows: [],
  lastUpdatedAt: '2026-08-05T10:15:00.000Z',
};

const createResponse = () => {
  const json = vi.fn();
  const response = {
    setHeader: vi.fn(),
    status: vi.fn().mockReturnValue({json}),
  };

  return {json, response};
};

describe('currentSpawnsHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetCurrentSpawnsData.mockResolvedValue(data);
  });

  it('returns current data with a short CDN cache', async () => {
    const {json, response} = createResponse();

    await currentSpawnsHandler({method: 'GET'} as never, response as never);

    expect(mockGetCurrentSpawnsData).toHaveBeenCalledOnce();
    expect(response.setHeader).toHaveBeenCalledWith(
      'Cache-Control',
      'public, max-age=0, s-maxage=30, stale-while-revalidate=30',
    );
    expect(response.status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(data);
  });

  it('rejects non-GET requests', async () => {
    const {json, response} = createResponse();

    await currentSpawnsHandler({method: 'POST'} as never, response as never);

    expect(mockGetCurrentSpawnsData).not.toHaveBeenCalled();
    expect(response.setHeader).toHaveBeenCalledWith('Allow', 'GET');
    expect(response.status).toHaveBeenCalledWith(405);
    expect(json).toHaveBeenCalledWith({error: 'Method not allowed'});
  });
});
