import {describe, expect, it, vi} from 'vitest';
import {getLastSuccessfulSpawnSync, recordSuccessfulSpawnSync} from './sync-status';

describe('spawn sync status', () => {
  it('creates a protected Postgres table and upserts the heartbeat', async () => {
    const query = vi.fn().mockResolvedValue([]);
    const source = {options: {type: 'postgres'}, query};
    const syncedAt = new Date('2026-08-05T10:15:00.000Z');

    await recordSuccessfulSpawnSync(source as never, syncedAt);
    await recordSuccessfulSpawnSync(source as never, syncedAt);

    expect(query).toHaveBeenCalledTimes(4);
    expect(query.mock.calls[0][0]).toContain('updated_at timestamptz not null');
    expect(query.mock.calls[1][0]).toBe('alter table app_sync_status enable row level security');
    expect(query.mock.calls[2][0]).toContain('values ($1, $2)');
    expect(query.mock.calls[2][1]).toEqual(['spawns', syncedAt.toISOString()]);
  });

  it('reads and normalizes the latest successful sync', async () => {
    const query = vi.fn().mockResolvedValue([{updated_at: new Date('2026-08-05T10:15:00.000Z')}]);
    const source = {options: {type: 'postgres'}, query};

    await expect(getLastSuccessfulSpawnSync(source as never)).resolves.toBe('2026-08-05T10:15:00.000Z');
  });

  it('returns null before the heartbeat table exists', async () => {
    const error = Object.assign(new Error('relation does not exist'), {code: '42P01'});
    const source = {options: {type: 'postgres'}, query: vi.fn().mockRejectedValue(error)};

    await expect(getLastSuccessfulSpawnSync(source as never)).resolves.toBeNull();
  });
});
