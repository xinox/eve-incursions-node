import { useState } from 'react';
import {GraphQLClient} from 'graphql-request';
import {getSdk, RatGroupsQuery} from '../lib/graphql';
import {Rat} from '../components/rats/Rat';
import styles from '../components/rats/rats.module.css';
import {formatNumber} from '../lib/utils';

type RatItem = RatGroupsQuery['ratGroups'][0]['rats'][0];
type SortMode = 'name-asc' | 'name-desc' | 'alpha-desc' | 'range-desc';
type ViewMode = 'cards' | 'table';

type VisibleGroup = {
  name: string;
  rats: RatItem[];
};

export const getServerSideProps = async () => {
  const client = new GraphQLClient('http://server:4001');
  const sdk = getSdk(client);
  const {ratGroups} = await sdk.ratGroups();

  return {props: {ratGroups}};
};

const sortRats = (rats: RatItem[], sortMode: SortMode) => {
  const list = [...rats];

  list.sort((left, right) => {
    if (sortMode === 'name-desc') {
      return right.name.localeCompare(left.name);
    }

    if (sortMode === 'alpha-desc') {
      return (right.attackAlpha ?? 0) - (left.attackAlpha ?? 0) || left.name.localeCompare(right.name);
    }

    if (sortMode === 'range-desc') {
      return (right.attackRange ?? 0) - (left.attackRange ?? 0) || left.name.localeCompare(right.name);
    }

    return left.name.localeCompare(right.name);
  });

  return list;
};

const CompactTable = ({groups}: { groups: VisibleGroup[] }) => {
  const rows = groups.flatMap(group => group.rats.map(rat => ({group: group.name, rat})));

  return (
    <div className={styles.tableWrap}>
      <table className={styles.compactTable}>
        <thead>
          <tr>
            <th>Rat</th>
            <th>Group</th>
            <th>EWAR</th>
            <th className={styles.tableNum}>Alpha</th>
            <th className={styles.tableNum}>DPS</th>
            <th className={styles.tableNum}>Range</th>
            <th className={styles.tableNum}>Orbit</th>
            <th className={styles.tableNum}>Chase</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({group, rat}) => {
            const dps = rat.attackAlpha && rat.attackDuration ? rat.attackAlpha / rat.attackDuration : null;
            const tags = rat.ewar.map(effect => effect.name).join(' | ');

            return (
              <tr key={`${group}-${rat.name}`}>
                <td>{rat.name}</td>
                <td>{group.replace("Incursion Sansha's Nation ", '')}</td>
                <td className={styles.tableTags}>{tags || '-'}</td>
                <td className={styles.tableNum}>{rat.attackAlpha ? formatNumber(rat.attackAlpha) : '-'}</td>
                <td className={styles.tableNum}>{dps ? formatNumber(dps, {maximumFractionDigits: 1}) : '-'}</td>
                <td className={styles.tableNum}>{formatNumber(rat.attackRange ?? 0)} m</td>
                <td className={styles.tableNum}>{formatNumber(rat.orbitRange)} m</td>
                <td className={styles.tableNum}>{formatNumber(rat.chaseSpeed)} m/s</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function Rats({ratGroups}: RatGroupsQuery) {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [sortMode, setSortMode] = useState<SortMode>('name-asc');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  if (ratGroups.length === 0) {
    return (
      <>
        <h1>Sansha Rats</h1>
        <p>No rat data has been imported yet.</p>
      </>
    );
  }

  const allTags = Array.from(new Set(
    ratGroups.flatMap(group => group.rats.flatMap(rat => rat.ewar.map(effect => effect.name)))
  )).sort((left, right) => left.localeCompare(right));

  const visibleGroups = ratGroups
    .map(({name, rats}) => {
      const filtered = rats.filter(rat => activeTag === 'all' || rat.ewar.some(effect => effect.name === activeTag));
      return {
        name,
        rats: sortRats(filtered, sortMode),
      };
    })
    .filter(group => group.rats.length > 0);

  return (
    <>
      <div className={styles.pageHeader}>
        <div>
          <h1>Sansha Rats</h1>
          <p className={styles.pageIntro}>Filter by EWAR tag, sort the list, and switch between detailed cards and a compact table.</p>
        </div>

        <div className={styles.controls}>
          <label className={styles.sortControl}>
            <span>Sort</span>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="alpha-desc">Highest Alpha</option>
              <option value="range-desc">Longest Attack Range</option>
            </select>
          </label>

          <div className={styles.viewToggle}>
            <button
              type="button"
              className={viewMode === 'cards' ? styles.filterActive : styles.filterChip}
              onClick={() => setViewMode('cards')}
            >
              Cards
            </button>
            <button
              type="button"
              className={viewMode === 'table' ? styles.filterActive : styles.filterChip}
              onClick={() => setViewMode('table')}
            >
              Compact Table
            </button>
          </div>
        </div>
      </div>

      <div className={styles.filters}>
        <button
          type="button"
          className={activeTag === 'all' ? styles.filterActive : styles.filterChip}
          onClick={() => setActiveTag('all')}
        >
          All Tags
        </button>
        {allTags.map(tag => (
          <button
            type="button"
            key={tag}
            className={activeTag === tag ? styles.filterActive : styles.filterChip}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {visibleGroups.length === 0 ? (
        <p>No rats match the selected filter.</p>
      ) : viewMode === 'table' ? (
        <CompactTable groups={visibleGroups} />
      ) : (
        visibleGroups.map(({name, rats}) => (
          <section key={name}>
            <h2 className={styles.groupTitle}>{name}</h2>
            {rats.map(rat => <Rat key={rat.name} rat={rat}/>) }
          </section>
        ))
      )}
    </>
  );
}
