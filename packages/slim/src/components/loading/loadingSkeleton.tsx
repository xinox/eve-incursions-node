import type {ReactNode} from 'react';
import styles from './loadingSkeleton.module.css';

const SkeletonLine = ({width, className = ''}: {width: string; className?: string}) => (
  <span className={`${styles.line} ${className}`} style={{width}} aria-hidden="true" />
);

const LoadingShell = ({label, children}: {label: string; children: ReactNode}) => (
  <div className={styles.loading} role="status" aria-live="polite" aria-label={label}>
    <span className={styles.srOnly}>{label}…</span>
    {children}
  </div>
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
  <LoadingShell label="Loading current incursions">
    <div className={styles.grid}>
      {Array.from({length: 5}, (_, index) => <SpawnCardSkeleton key={index} />)}
    </div>
  </LoadingShell>
);

const TablePageSkeleton = ({label, columns}: {label: string; columns: number}) => (
  <LoadingShell label={label}>
    <SkeletonLine width="15rem" className={styles.pageTitle} />
    <div className={styles.table} aria-hidden="true">
      <div className={styles.tableRow} style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}}>
        {Array.from({length: columns}, (_, index) => <SkeletonLine width={index === 0 ? '55%' : '72%'} key={index} />)}
      </div>
      {Array.from({length: 9}, (_, row) => (
        <div className={styles.tableRow} style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}} key={row}>
          {Array.from({length: columns}, (_, column) => (
            <SkeletonLine width={`${48 + ((row + column) % 4) * 12}%`} key={column} />
          ))}
        </div>
      ))}
    </div>
  </LoadingShell>
);

const RatsPageSkeleton = () => (
  <LoadingShell label="Loading Sansha rats">
    <div className={styles.ratsHeader} aria-hidden="true">
      <div className={styles.ratsIntro}>
        <SkeletonLine width="12rem" className={styles.pageTitle} />
        <SkeletonLine width="28rem" />
      </div>
      <div className={styles.controls}>
        <span className={styles.control} />
        <span className={styles.control} />
      </div>
    </div>
    <div className={styles.chips} aria-hidden="true">
      {Array.from({length: 6}, (_, index) => <span className={styles.chip} key={index} />)}
    </div>
    <div className={styles.ratGrid} aria-hidden="true">
      {Array.from({length: 6}, (_, index) => (
        <article className={styles.ratCard} key={index}>
          <SkeletonLine width="42%" className={styles.ratTitle} />
          <SkeletonLine width="78%" />
          <SkeletonLine width="64%" />
          <SkeletonLine width="52%" />
        </article>
      ))}
    </div>
  </LoadingShell>
);

const ProsePageSkeleton = ({label}: {label: string}) => (
  <LoadingShell label={label}>
    <div className={styles.prose} aria-hidden="true">
      <SkeletonLine width="9rem" className={styles.pageTitle} />
      <SkeletonLine width="96%" />
      <SkeletonLine width="88%" />
      <SkeletonLine width="72%" />
      <span className={styles.proseGap} />
      <SkeletonLine width="92%" />
      <SkeletonLine width="64%" />
    </div>
  </LoadingShell>
);

export type SkeletonKind = 'home' | 'history' | 'communities' | 'rats' | 'about' | 'blog' | 'generic';

export const getSkeletonKind = (path: string): SkeletonKind => {
  const pathname = path.split(/[?#]/)[0];

  switch (pathname) {
    case '/':
      return 'home';
    case '/history':
      return 'history';
    case '/communities':
      return 'communities';
    case '/rats':
      return 'rats';
    case '/about':
      return 'about';
    case '/blog':
      return 'blog';
    default:
      return 'generic';
  }
};

export const RouteSkeleton = ({path}: {path: string}) => {
  switch (getSkeletonKind(path)) {
    case 'home':
      return <PageSkeleton />;
    case 'history':
      return <TablePageSkeleton label="Loading spawn history" columns={7} />;
    case 'communities':
      return <TablePageSkeleton label="Loading incursion communities" columns={9} />;
    case 'rats':
      return <RatsPageSkeleton />;
    case 'about':
      return <ProsePageSkeleton label="Loading about page" />;
    case 'blog':
      return <ProsePageSkeleton label="Loading blog" />;
    case 'generic':
      return <ProsePageSkeleton label="Loading page" />;
  }
};
