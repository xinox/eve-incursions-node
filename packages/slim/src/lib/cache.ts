import type {GetServerSidePropsContext} from 'next';

export const setSharedCache = (
  res: GetServerSidePropsContext['res'],
  maxAgeSeconds: number,
  staleWhileRevalidateSeconds = maxAgeSeconds * 10,
) => {
  res.setHeader('Cache-Control', `public, s-maxage=${maxAgeSeconds}, stale-while-revalidate=${staleWhileRevalidateSeconds}`);
};
