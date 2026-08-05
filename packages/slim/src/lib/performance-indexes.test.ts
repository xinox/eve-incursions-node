import {describe, expect, it, vi} from 'vitest';

vi.mock('./data-source', () => ({ensureAppDataSource: vi.fn()}));

import {ensurePerformanceIndexes, PERFORMANCE_INDEX_SQL} from './performance-indexes';

describe('ensurePerformanceIndexes', () => {
  it('creates each index once per data source', async () => {
    const source = {query: vi.fn().mockResolvedValue(undefined)};

    await ensurePerformanceIndexes(source as never);
    await ensurePerformanceIndexes(source as never);

    expect(source.query).toHaveBeenCalledTimes(PERFORMANCE_INDEX_SQL.length);
    expect(source.query.mock.calls.map(([sql]) => sql)).toEqual(PERFORMANCE_INDEX_SQL);
  });

  it('allows a retry after an index creation failure', async () => {
    const source = {query: vi.fn()
      .mockRejectedValueOnce(new Error('temporary failure'))
      .mockResolvedValue(undefined)};

    await expect(ensurePerformanceIndexes(source as never)).rejects.toThrow('temporary failure');
    await expect(ensurePerformanceIndexes(source as never)).resolves.toBeUndefined();
  });
});
