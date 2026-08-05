import systemSizes from './system-sizes.json';

const SYSTEM_EDGE_PADDING_AU = 17;
// Raw outer-planet distances generated from seed/eve-incursions-seed.sql.gz.
const rawSystemSizes = systemSizes as Record<string, number>;

export const displaySystemSize = (rawSize: unknown) => {
  const size = Number(rawSize);
  return Number.isFinite(size) && size > 0
    ? (size + SYSTEM_EDGE_PADDING_AU) * 2
    : 0;
};

export const getSeedSystemSize = (systemId: number) => {
  const size = rawSystemSizes[String(systemId)];
  return Number.isFinite(size) && size > 0 ? size : null;
};
