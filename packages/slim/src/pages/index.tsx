import {GetStaticProps} from 'next';
import {CurrentSpawnsData, getCurrentSpawnsData} from '../lib/current-spawns';
import {LastHsSpawn} from '../components/spawn/lastHsSpawn';
import {RespawnWindows} from '../components/spawn/respawnWindows';
import {DataFreshness} from '../components/status/dataFreshness';
import useSWR from 'swr';

const LIVE_REFRESH_INTERVAL_MS = 90_000;

const fetchActiveSpawns = async (url: string): Promise<CurrentSpawnsData> => {
  const response = await fetch(url, {headers: {Accept: 'application/json'}});
  if (!response.ok) throw new Error(`Live spawn refresh failed with ${response.status}`);
  return response.json() as Promise<CurrentSpawnsData>;
};

export const getStaticProps: GetStaticProps<CurrentSpawnsData> = async () => {
  const props = await getCurrentSpawnsData();
  return {
    props,
    // Cron revalidates immediately after a successful sync. This is the
    // fallback in case a cron invocation is ever missed.
    revalidate: 300,
  };
};

export default function Home(initialData: CurrentSpawnsData) {
  const {data = initialData} = useSWR<CurrentSpawnsData>('/api/spawns/current', fetchActiveSpawns, {
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
  const {activeSpawns, lastHighSecSpawn: {date}, respawnWindows, lastUpdatedAt} = data;
  const hasSpawns = activeSpawns.length > 0;

  return (
    <>
      <DataFreshness lastUpdatedAt={lastUpdatedAt} />
      <LastHsSpawn date={date} hasSpawns={hasSpawns} />
      <RespawnWindows activeSpawns={activeSpawns} respawnWindows={respawnWindows} />
    </>
  );
}
