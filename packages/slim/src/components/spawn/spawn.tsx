import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import dynamic from 'next/dynamic';
import TimeAgo from 'react-timeago';
import {ChartSkeleton} from '../loading/loadingSkeleton';
import { ActiveSpawnsQuery } from '../../lib/graphql';
import { classNames, dotlanTransform } from '../../lib/utils';
import { Systems } from './systems';
import styles from './spawn.module.css';

const Chart = dynamic(
  () => import('./chart').then(module => module.Chart),
  {ssr: false, loading: ChartSkeleton},
);

export const Spawn = ({ spawn }: { spawn: ActiveSpawnsQuery['activeSpawns'][0] }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  let lifetime = 24 * 60 * 60 * 1000;
  if (spawn.state === 'Mobilizing') {
    lifetime *= 3;
  } else if (spawn.state === 'Established') {
    lifetime *= 8;
  }

  const maxLifetimeDate = new Date(spawn.lastStateChangeDate).getTime() + lifetime;
  const influencePct = Math.round(spawn.influence * 100);
  const establishedDate = new Date(spawn.establishedAt);

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img
          className={styles.sov}
          src={`https://images.evetech.net/${spawn.stagingSystem.sovereigntyHolderID < 600000 ? 'corporations' : 'alliances'}/${spawn.stagingSystem.sovereigntyHolderID}/logo?size=64`}
          title={spawn.stagingSystem.sovereigntyHolderName}
          alt={spawn.stagingSystem.sovereigntyHolderName}
        />
        <h2 className={styles.title}>
          <a
            href={`https://evemaps.dotlan.net/map/${dotlanTransform(spawn.constellation.region.name)}/${dotlanTransform(spawn.constellation.name)}#radius`}
            target="_blank"
            rel="noopener"
          >
            <span className={styles.titleName}>{spawn.constellation.name}</span>
            <span className={styles.titleRegion}>{spawn.constellation.region.name}</span>
          </a>
        </h2>
        <span className={classNames('state', `state-${spawn.state.toLocaleLowerCase()}`, styles.statePill)}>
          {spawn.state}
          {spawn.boss && ' - Boss'}
        </span>
      </header>

      <dl className={styles.facts}>
        <div className={classNames(styles.fact, styles.influenceFact)}>
          <dt>Influence</dt>
          <dd>
            <div
              className={styles.progress}
              role="progressbar"
              aria-label={`Sansha influence in ${spawn.constellation.name}`}
              aria-valuenow={influencePct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuetext={`${influencePct}%`}
            >
              <div className={styles.bar} style={{ width: `${influencePct}%` }} />
            </div>
            <span className={styles.influenceVal}>{influencePct}%</span>
          </dd>
        </div>

        <div className={styles.fact}>
          <dt>Staging</dt>
          <dd>
            <a
              href={`https://evemaps.dotlan.net/system/${dotlanTransform(spawn.stagingSystem.name)}`}
              target="_blank"
              rel="noopener"
            >
              {spawn.stagingSystem.name}
            </a>{' '}
            <span className={classNames('sec', `sec-${spawn.stagingSystem.securityArea}`)}>
              {spawn.stagingSystem.security}
            </span>
          </dd>
        </div>

        <div className={styles.fact}>
          <dt>Started</dt>
          <dd suppressHydrationWarning>
            {hasMounted ? (
              <TimeAgo date={spawn.establishedAt} />
            ) : (
              <time dateTime={establishedDate.toISOString()}>{establishedDate.toISOString()}</time>
            )}
          </dd>
        </div>

        <div className={styles.fact}>
          <dt title="The maximum possible time the incursion will stay active">Max. remaining</dt>
          <dd suppressHydrationWarning>
            <Countdown
              intervalDelay={spawn.state === 'Established' ? 100000 : 1000}
              daysInHours
              renderer={({ days: rawDays, formatted: { minutes, hours, seconds } }) =>
                spawn.state === 'Established' ? `up to ${rawDays} days` : `${hours}:${minutes}:${seconds}`
              }
              date={maxLifetimeDate}
            />
          </dd>
        </div>
      </dl>

      <div className={styles.chart}>
        <Chart
          influenceLogArray={spawn.influenceLogArray}
          accessibleLabel={`Sansha influence history for ${spawn.constellation.name} over the last 72 hours`}
        />
      </div>

      <Systems systems={spawn.constellation.systems} />
    </article>
  );
};
