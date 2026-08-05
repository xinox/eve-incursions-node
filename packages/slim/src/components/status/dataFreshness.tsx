import {useEffect, useState} from 'react';
import useSWR from 'swr';
import {classNames} from '../../lib/utils';
import type {SpawnSyncStatusData} from '../../lib/sync-status';
import styles from './dataFreshness.module.css';

const MINUTE_MS = 60_000;

export type FreshnessTone = 'current' | 'delayed' | 'stale';

export type DataFreshnessState = {
  tone: FreshnessTone;
  label: string;
  detail: string;
  compactLabel: string;
  compactAge: string | null;
};

const formatAge = (ageMs: number) => {
  const minutes = Math.floor(ageMs / MINUTE_MS);
  if (minutes < 1) return {long: 'just now', short: 'now'};
  if (minutes === 1) return {long: '1 minute ago', short: '1m'};
  if (minutes < 60) return {long: `${minutes} minutes ago`, short: `${minutes}m`};

  const hours = Math.floor(minutes / 60);
  if (hours === 1) return {long: '1 hour ago', short: '1h'};
  if (hours < 24) return {long: `${hours} hours ago`, short: `${hours}h`};

  const days = Math.floor(hours / 24);
  return {long: days === 1 ? '1 day ago' : `${days} days ago`, short: `${days}d`};
};

export const getDataFreshness = (lastUpdatedAt: string | null, now: number): DataFreshnessState => {
  const timestamp = lastUpdatedAt === null ? Number.NaN : Date.parse(lastUpdatedAt);
  if (Number.isNaN(timestamp)) {
    return {
      tone: 'stale',
      label: 'Data unavailable',
      detail: 'No successful spawn update recorded.',
      compactLabel: 'No sync',
      compactAge: null,
    };
  }

  const ageMs = Math.max(0, now - timestamp);
  const age = formatAge(ageMs);

  if (ageMs >= 10 * MINUTE_MS) {
    return {
      tone: 'stale',
      label: 'Data may be stale',
      detail: `Spawn updater last succeeded ${age.long}.`,
      compactLabel: 'Stale',
      compactAge: age.short,
    };
  }

  if (ageMs >= 5 * MINUTE_MS) {
    return {
      tone: 'delayed',
      label: 'Update delayed',
      detail: `Last successful update ${age.long}.`,
      compactLabel: 'Delayed',
      compactAge: age.short,
    };
  }

  return {
    tone: 'current',
    label: 'Data current',
    detail: `Last successful update ${age.long}.`,
    compactLabel: 'Live',
    compactAge: age.short,
  };
};

export const DataFreshness = ({lastUpdatedAt, loading = false}: {
  lastUpdatedAt: string | null;
  loading?: boolean;
}) => {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    updateNow();
    const interval = window.setInterval(updateNow, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  const isChecking = now === null || loading;
  const freshness = isChecking
    ? {
        tone: 'current' as const,
        label: 'Checking data freshness',
        detail: 'Reading the latest sync status.',
        compactLabel: 'Sync',
        compactAge: null,
      }
    : getDataFreshness(lastUpdatedAt, now);
  const description = `${freshness.label}. ${freshness.detail}`;

  return (
    <div
      className={classNames(styles.status, styles[isChecking ? 'checking' : freshness.tone])}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={description}
      title={description}
    >
      <span className={styles.dot} aria-hidden="true" />
      <strong>{freshness.compactLabel}</strong>
      {freshness.compactAge && lastUpdatedAt ? (
        <>
          <span className={styles.separator} aria-hidden="true">·</span>
          <time className={styles.age} dateTime={lastUpdatedAt}>{freshness.compactAge}</time>
        </>
      ) : null}
    </div>
  );
};

const fetchSyncStatus = async (url: string): Promise<SpawnSyncStatusData> => {
  const response = await fetch(url, {headers: {Accept: 'application/json'}});
  if (!response.ok) throw new Error(`Spawn sync status failed with ${response.status}`);
  return response.json() as Promise<SpawnSyncStatusData>;
};

export const LiveDataFreshness = () => {
  const {data, error} = useSWR<SpawnSyncStatusData>('/api/spawns/status', fetchSyncStatus, {
    refreshInterval: 60_000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    dedupingInterval: 15_000,
    errorRetryCount: 2,
  });

  return <DataFreshness lastUpdatedAt={data?.lastUpdatedAt ?? null} loading={!data && !error} />;
};
