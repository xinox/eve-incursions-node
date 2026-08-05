import {describe, expect, it} from 'vitest';
import {getDataFreshness} from './dataFreshness';

const now = Date.parse('2026-08-05T10:15:00.000Z');

describe('getDataFreshness', () => {
  it.each([
    ['2026-08-05T10:14:30.000Z', 'current', 'Data current'],
    ['2026-08-05T10:10:00.000Z', 'delayed', 'Update delayed'],
    ['2026-08-05T10:05:00.000Z', 'stale', 'Data may be stale'],
  ])('classifies %s as %s', (lastUpdatedAt, tone, label) => {
    expect(getDataFreshness(lastUpdatedAt, now)).toMatchObject({tone, label});
  });

  it('warns when no valid successful update exists', () => {
    expect(getDataFreshness(null, now)).toEqual({
      tone: 'stale',
      label: 'Data unavailable',
      detail: 'No successful spawn update recorded.',
      compactLabel: 'No sync',
      compactAge: null,
    });
    expect(getDataFreshness('invalid', now).tone).toBe('stale');
  });

  it('provides a compact age for the navigation pill', () => {
    expect(getDataFreshness('2026-08-05T10:12:00.000Z', now)).toMatchObject({
      compactLabel: 'Live',
      compactAge: '3m',
    });
  });
});
