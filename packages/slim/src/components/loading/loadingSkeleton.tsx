import styles from './loadingSkeleton.module.css';

const SkeletonLine = ({width}: {width: string}) => (
  <span className={styles.line} style={{width}} aria-hidden="true" />
);

export const ChartSkeleton = () => (
  <div className={styles.chart} aria-hidden="true">
    <span className={styles.chartLine} />
  </div>
);

const SpawnCardSkeleton = () => (
  <article className={styles.card} aria-hidden="true">
    <header className={styles.header}>
      <span className={styles.logo} />
      <SkeletonLine width="42%" />
      <span className={styles.pill} />
    </header>

    <div className={styles.facts}>
      {['34%', '56%', '44%', '50%', '38%'].map((width, index) => (
        <div className={styles.fact} key={index}>
          <SkeletonLine width="45%" />
          <SkeletonLine width={width} />
        </div>
      ))}
    </div>

    <div className={styles.chartWrap}>
      <ChartSkeleton />
    </div>

    <div className={styles.systems}>
      <SkeletonLine width="28%" />
      <SkeletonLine width="82%" />
      <SkeletonLine width="68%" />
    </div>
  </article>
);

export const PageSkeleton = () => (
  <div className={styles.loading} role="status" aria-live="polite" aria-label="Loading current incursions">
    <span className={styles.srOnly}>Loading current incursions…</span>
    <div className={styles.grid}>
      {Array.from({length: 5}, (_, index) => <SpawnCardSkeleton key={index} />)}
    </div>
  </div>
);
