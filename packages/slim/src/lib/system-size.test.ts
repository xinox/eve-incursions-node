import {describe, expect, it} from 'vitest';
import {displaySystemSize, getSeedSystemSize} from './system-size';

describe('system sizes', () => {
  it('does not turn a missing raw size into 34 AU', () => {
    expect(displaySystemSize(0)).toBe(0);
    expect(displaySystemSize(null)).toBe(0);
  });

  it('uses the stored outer-planet distance for the displayed diameter', () => {
    expect(displaySystemSize(11)).toBe(56);
  });

  it('contains seed sizes for systems previously created without one', () => {
    expect(getSeedSystemSize(30004786)).toBe(33);
    expect(getSeedSystemSize(30004910)).toBe(18);
    expect(getSeedSystemSize(30003924)).toBe(15);
  });
});
