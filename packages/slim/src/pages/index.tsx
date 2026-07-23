import {ActiveSpawnsQuery} from '../lib/graphql';
import {getActiveSpawns} from '../lib/db';
import {LastHsSpawn} from '../components/spawn/lastHsSpawn';
import {RespawnWindows} from '../components/spawn/respawnWindows';
import styles from '../styles/home.module.css';

export const getServerSideProps = async () => {
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
