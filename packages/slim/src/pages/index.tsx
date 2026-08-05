import {GetStaticProps} from 'next';
import {ActiveSpawnsQuery} from '../lib/graphql';
import {getActiveSpawns} from '../lib/db';
import {LastHsSpawn} from '../components/spawn/lastHsSpawn';
import {RespawnWindows} from '../components/spawn/respawnWindows';
import useSWR from 'swr';

const LIVE_REFRESH_INTERVAL_MS = 90_000;

const fetchActiveSpawns = async (url: string): Promise<ActiveSpawnsQuery> => {
  const response = await fetch(url, {headers: {Accept: 'application/json'}});
  if (!response.ok) throw new Error(`Live spawn refresh failed with ${response.status}`);
  return response.json() as Promise<ActiveSpawnsQuery>;
};

export const getStaticProps: GetStaticProps<ActiveSpawnsQuery> = async () => {
  const props = await getActiveSpawns();
  return {
    props,
    // Cron revalidates immediately after a successful sync. This is the
    // fallback in case a cron invocation is ever missed.
    revalidate: 300,
  };
};

export default function Home(initialData: ActiveSpawnsQuery) {
  const {data = initialData} = useSWR<ActiveSpawnsQuery>('/api/spawns/current', fetchActiveSpawns, {
    fallbackData: initialData,
    refreshInterval: LIVE_REFRESH_INTERVAL_MS,
    revalidateOnMount: false,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    dedupingInterval: 30_000,
    errorRetryCount: 2,
  });
  const {activeSpawns, lastHighSecSpawn: {date}, respawnWindows} = data;
  const hasSpawns = activeSpawns.length > 0;

  return (
    <>
      <LastHsSpawn date={date} hasSpawns={hasSpawns} />
      <RespawnWindows activeSpawns={activeSpawns} respawnWindows={respawnWindows} />
    </>
  );
}
