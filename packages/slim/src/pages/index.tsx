import {ActiveSpawnsQuery} from '../lib/graphql';
import {GetServerSideProps} from 'next';
import {getActiveSpawns} from '../lib/db';
import {LastHsSpawn} from '../components/spawn/lastHsSpawn';
import {RespawnWindows} from '../components/spawn/respawnWindows';
import {setSharedCache} from '../lib/cache';

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  setSharedCache(res, 30, 300);
  const props = await getActiveSpawns();
  return {props};
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
