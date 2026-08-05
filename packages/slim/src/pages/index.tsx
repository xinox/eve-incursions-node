import {ActiveSpawnsQuery} from '../lib/graphql';
import {GetStaticProps} from 'next';
import {getActiveSpawns} from '../lib/db';
import {LastHsSpawn} from '../components/spawn/lastHsSpawn';
import {RespawnWindows} from '../components/spawn/respawnWindows';

export const getStaticProps: GetStaticProps<ActiveSpawnsQuery> = async () => {
  const props = await getActiveSpawns();
  return {
    props,
    // Cron revalidates immediately after a successful sync. This is the
    // fallback in case a cron invocation is ever missed.
    revalidate: 300,
  };
};

export default function Home({activeSpawns, lastHighSecSpawn: {date}, respawnWindows}: ActiveSpawnsQuery) {
  const hasSpawns = activeSpawns.length > 0;

  return (
    <>
      <LastHsSpawn date={date} hasSpawns={hasSpawns} />
      <RespawnWindows activeSpawns={activeSpawns} respawnWindows={respawnWindows} />
    </>
  );
}
