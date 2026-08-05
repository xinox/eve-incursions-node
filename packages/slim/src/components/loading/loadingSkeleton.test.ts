import {describe, expect, it} from 'vitest';
import {getSkeletonKind} from './loadingSkeleton';

describe('getSkeletonKind', () => {
  it.each([
    ['/', 'home'],
    ['/history?page=2', 'history'],
    ['/communities', 'communities'],
    ['/rats', 'rats'],
    ['/about', 'about'],
    ['/blog#latest', 'blog'],
  ] as const)('maps %s to %s', (path, kind) => {
    expect(getSkeletonKind(path)).toBe(kind);
  });
});
