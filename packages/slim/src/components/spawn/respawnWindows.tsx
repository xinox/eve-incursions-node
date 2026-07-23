import Countdown from 'react-countdown';
import TimeAgo from 'react-timeago';
import {ActiveSpawnsQuery, IncursionRespawnWindow} from '../../lib/graphql';
import {classNames} from '../../lib/utils';
import {Spawn} from './spawn';
import styles from './spawn.module.css';

const RespawnCard = ({window}: {window: IncursionRespawnWindow}) => {
  const openAt = window.windowOpensAt ? new Date(window.windowOpensAt) : null;
  const closeAt = window.windowClosesAt ? new Date(window.windowClosesAt) : null;
  const endedAt = window.endedAt ? new Date(window.endedAt) : null;
  const hasEstimate = openAt !== null && closeAt !== null;
  const isOpen = hasEstimate && openAt.getTime() <= Date.now() && closeAt.getTime() > Date.now();
  const isFuture = hasEstimate && openAt.getTime() > Date.now();
  const openedAt = endedAt ? new Date(endedAt.getTime() + 12 * 60 * 60 * 1000) : openAt;

  const tone = window.isEstimated ? 'Estimated' : isFuture ? 'Respawn soon' : isOpen ? 'Respawn open' : 'Respawn overdue';
  const formatDate = (date: Date | null) => date ? date.toLocaleString('de-DE', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'n/a';

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.sov} aria-hidden="true" />
        <h2 className={styles.title}>Respawn Window</h2>
        <span className={classNames(styles.statePill)}>{tone}</span>
      </header>

      <div className={styles.chart}>
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dt>Status</dt>
            <dd suppressHydrationWarning>{tone}</dd>
          </div>
          <div className={styles.fact}>
            <dt>Opened</dt>
            <dd suppressHydrationWarning>
              {hasEstimate ? (isFuture ? <Countdown date={openAt} daysInHours /> : <TimeAgo date={openedAt ?? openAt} />) : 'n/a'}
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Closed</dt>
            <dd suppressHydrationWarning>{hasEstimate ? formatDate(closeAt) : 'n/a'}</dd>
          </div>
          <div className={styles.fact}>
            <dt>Time left</dt>
            <dd suppressHydrationWarning>{hasEstimate ? <Countdown date={closeAt} daysInHours /> : 'n/a'}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export const RespawnWindows = ({activeSpawns, respawnWindows}: { activeSpawns: ActiveSpawnsQuery['activeSpawns']; respawnWindows: IncursionRespawnWindow[] }) => {
  const activeByArea = {
    high: activeSpawns.filter(spawn => spawn.stagingSystem.securityArea === 'high'),
    low: activeSpawns.filter(spawn => spawn.stagingSystem.securityArea === 'low'),
    null: activeSpawns.filter(spawn => spawn.stagingSystem.securityArea === 'null'),
  };

  const windowsByArea = {
    high: respawnWindows.filter(window => window.securityArea === 'high'),
    low: respawnWindows.filter(window => window.securityArea === 'low'),
    null: respawnWindows.filter(window => window.securityArea === 'null'),
  };

  const cards = [
    activeByArea.high[0] ? <Spawn key={`active-high-${activeByArea.high[0].id}`} spawn={activeByArea.high[0]} /> : windowsByArea.high[0] ? <RespawnCard key={`respawn-high-${windowsByArea.high[0].slotIndex}`} window={windowsByArea.high[0]} /> : <RespawnCard key="placeholder-high" window={{ securityArea: 'high', label: 'High-Sec', totalSlots: 1, activeSlots: 0, missingSlots: 1, slotIndex: 1, slotCount: 1, constellationName: null, regionName: null, stageSystemName: null, spawnedAt: null, endedAt: null, windowOpensAt: null, windowClosesAt: null, isEstimated: false }} />,
    activeByArea.low[0] ? <Spawn key={`active-low-${activeByArea.low[0].id}`} spawn={activeByArea.low[0]} /> : windowsByArea.low[0] ? <RespawnCard key={`respawn-low-${windowsByArea.low[0].slotIndex}`} window={windowsByArea.low[0]} /> : <RespawnCard key="placeholder-low" window={{ securityArea: 'low', label: 'Low-Sec', totalSlots: 1, activeSlots: 0, missingSlots: 1, slotIndex: 1, slotCount: 1, constellationName: null, regionName: null, stageSystemName: null, spawnedAt: null, endedAt: null, windowOpensAt: null, windowClosesAt: null, isEstimated: false }} />,
    activeByArea.null[0] ? <Spawn key={`active-null-1-${activeByArea.null[0].id}`} spawn={activeByArea.null[0]} /> : windowsByArea.null[0] ? <RespawnCard key={`respawn-null-${windowsByArea.null[0].slotIndex}`} window={windowsByArea.null[0]} /> : <RespawnCard key="placeholder-null-1" window={{ securityArea: 'null', label: 'Null-Sec', totalSlots: 3, activeSlots: 0, missingSlots: 1, slotIndex: 1, slotCount: 3, constellationName: null, regionName: null, stageSystemName: null, spawnedAt: null, endedAt: null, windowOpensAt: null, windowClosesAt: null, isEstimated: false }} />,
    activeByArea.null[1] ? <Spawn key={`active-null-2-${activeByArea.null[1].id}`} spawn={activeByArea.null[1]} /> : windowsByArea.null[1] ? <RespawnCard key={`respawn-null-${windowsByArea.null[1].slotIndex}`} window={windowsByArea.null[1]} /> : <RespawnCard key="placeholder-null-2" window={{ securityArea: 'null', label: 'Null-Sec', totalSlots: 3, activeSlots: 0, missingSlots: 1, slotIndex: 2, slotCount: 3, constellationName: null, regionName: null, stageSystemName: null, spawnedAt: null, endedAt: null, windowOpensAt: null, windowClosesAt: null, isEstimated: false }} />,
    activeByArea.null[2] ? <Spawn key={`active-null-3-${activeByArea.null[2].id}`} spawn={activeByArea.null[2]} /> : windowsByArea.null[2] ? <RespawnCard key={`respawn-null-${windowsByArea.null[2].slotIndex}`} window={windowsByArea.null[2]} /> : <RespawnCard key="placeholder-null-3" window={{ securityArea: 'null', label: 'Null-Sec', totalSlots: 3, activeSlots: 0, missingSlots: 1, slotIndex: 3, slotCount: 3, constellationName: null, regionName: null, stageSystemName: null, spawnedAt: null, endedAt: null, windowOpensAt: null, windowClosesAt: null, isEstimated: false }} />,
  ];

  return <div className={styles.grid}>{cards}</div>;
};
