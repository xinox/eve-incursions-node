import {useEffect, useState} from 'react';
import {classNames} from '../../lib/utils';
import styles from './dataFreshness.module.css';

const MINUTE_MS = 60_000;

export type FreshnessTone = 'current' | 'delayed' | 'stale';

export type DataFreshnessState = {
  tone: FreshnessTone;
  label: string;
  detail: string;
};

const formatAge = (ageMs: number) => {
  const minutes = Math.floor(ageMs / MINUTE_MS);
  if (minutes < 1) return 'just now';
  if (minutes === 1) return '1 minute ago';
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours === 1) return '1 hour ago';
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  return days === 1 ? '1 day ago' : `${days} days ago`;
};

export const getDataFreshness = (lastUpdatedAt: string | null, now: number): DataFreshnessState => {
  const timestamp = lastUpdatedAt === null ? Number.NaN : Date.parse(lastUpdatedAt);
  if (Number.isNaN(timestamp)) {
    return {
      tone: 'stale',
      label: 'Data unavailable',
      detail: 'No successful spawn update recorded.',
    };
  }

  const ageMs = Math.max(0, now - timestamp);
  const age = formatAge(ageMs);

  if (ageMs >= 10 * MINUTE_MS) {
    return {
      tone: 'stale',
      label: 'Data may be stale',
      detail: `Spawn updater last succeeded ${age}.`,
    };
  }

  if (ageMs >= 5 * MINUTE_MS) {
    return {
      tone: 'delayed',
      label: 'Update delayed',
      detail: `Last successful update ${age}.`,
    };
  }

  return {
    tone: 'current',
    label: 'Data current',
    detail: `Last successful update ${age}.`,
  };
};

export const DataFreshness = ({lastUpdatedAt}: {lastUpdatedAt: string | null}) => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    updateNow();
    const interval = window.setInterval(updateNow, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const isChecking = now === null;
  const freshness = isChecking
    ? {tone: 'current' as const, label: 'Checking data freshness', detail: 'Reading the latest sync status.'}
    : getDataFreshness(lastUpdatedAt, now);

  return (
    <div
      className={classNames(styles.status, styles[isChecking ? 'checking' : freshness.tone])}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className={styles.dot} aria-hidden="true" />
      <strong>{freshness.label}</strong>
      <span className={styles.detail}>
        {lastUpdatedAt && now !== null ? (
          <time dateTime={lastUpdatedAt}>{freshness.detail}</time>
        ) : freshness.detail}
      </span>
    </div>
  );
};
