import { useState } from 'react';
import {RatGroupsQuery} from '../lib/graphql';
import {Rat} from '../components/rats/Rat';
import {Ewar} from '../components/rats/Ewar';
import styles from '../components/rats/rats.module.css';
import {formatNumber} from '../lib/utils';
import {getRatGroups} from '../lib/db';

type RatItem = RatGroupsQuery['ratGroups'][0]['rats'][0];
type SortMode = 'name-asc' | 'name-desc' | 'alpha-desc' | 'range-desc';
type ViewMode = 'cards' | 'table';
type TableSortKey = 'rat' | 'group' | 'ewar' | 'alpha' | 'dps' | 'range' | 'orbit' | 'chase';
type TableSortDirection = 'asc' | 'desc';

type VisibleGroup = {
  name: string;
  rats: RatItem[];
};

type TableRow = {
  group: string;
  rat: RatItem;
};

export const getServerSideProps = async () => {
  const props = await getRatGroups();
  return {props};
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

const tableValue = (row: TableRow, key: TableSortKey): string | number => {
  const dps = row.rat.attackAlpha && row.rat.attackDuration ? row.rat.attackAlpha / row.rat.attackDuration : 0;

  switch (key) {
    case 'rat':
      return row.rat.name;
    case 'group':
      return row.group;
    case 'ewar':
      return row.rat.ewar.map(effect => effect.name).join(' | ');
    case 'alpha':
      return row.rat.attackAlpha ?? 0;
    case 'dps':
      return dps;
    case 'range':
      return row.rat.attackRange ?? 0;
    case 'orbit':
      return row.rat.orbitRange;
    case 'chase':
      return row.rat.chaseSpeed;
  }
};

const sortTableRows = (rows: TableRow[], key: TableSortKey, direction: TableSortDirection) => {
  const multiplier = direction === 'asc' ? 1 : -1;

  return [...rows].sort((left, right) => {
    const leftValue = tableValue(left, key);
    const rightValue = tableValue(right, key);

    if (typeof leftValue === 'number' && typeof rightValue === 'number') {
      return (leftValue - rightValue) * multiplier;
    }

    return String(leftValue).localeCompare(String(rightValue)) * multiplier;
  });
};

const CompactTable = ({groups, sortKey, sortDirection, onSortChange}: { groups: VisibleGroup[]; sortKey: TableSortKey; sortDirection: TableSortDirection; onSortChange: (key: TableSortKey) => void; }) => {
  const rows = sortTableRows(groups.flatMap(group => group.rats.map(rat => ({group: group.name, rat}))), sortKey, sortDirection);

  const sortLabel = (key: TableSortKey, label: string) => (
    <button
      type="button"
      className={styles.tableSortButton}
      onClick={() => onSortChange(key)}
      aria-sort={sortKey === key ? (sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      <span>{label}</span>
      {sortKey === key && <span className={styles.sortMark}>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
    </button>
  );

  return (
    <div className={styles.tableWrap}>
      <table className={styles.compactTable}>
        <thead>
          <tr>
            <th>{sortLabel('rat', 'Rat')}</th>
            <th>{sortLabel('group', 'Group')}</th>
            <th>{sortLabel('ewar', 'EWAR')}</th>
            <th className={styles.tableNum}>{sortLabel('alpha', 'Alpha')}</th>
            <th className={styles.tableNum}>{sortLabel('dps', 'DPS')}</th>
            <th className={styles.tableNum}>{sortLabel('range', 'Range')}</th>
            <th className={styles.tableNum}>{sortLabel('orbit', 'Orbit')}</th>
            <th className={styles.tableNum}>{sortLabel('chase', 'Chase')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({group, rat}) => {
            const dps = rat.attackAlpha && rat.attackDuration ? rat.attackAlpha / rat.attackDuration : null;

            return (
              <tr key={`${group}-${rat.name}`}>
                <td>{rat.name}</td>
                <td>{group.replace("Incursion Sansha's Nation ", '')}</td>
                <td className={styles.tableTags}>{rat.ewar.length > 0 ? <Ewar ewar={rat.ewar}/> : '-'}</td>
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
  const [tableSortKey, setTableSortKey] = useState<TableSortKey>('rat');
  const [tableSortDirection, setTableSortDirection] = useState<TableSortDirection>('asc');

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

  const handleTableSortChange = (key: TableSortKey) => {
    if (tableSortKey === key) {
      setTableSortDirection(direction => direction === 'asc' ? 'desc' : 'asc');
      return;
    }

    setTableSortKey(key);
    setTableSortDirection(key === 'rat' || key === 'group' || key === 'ewar' ? 'asc' : 'desc');
  };

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
        <CompactTable
          groups={visibleGroups}
          sortKey={tableSortKey}
          sortDirection={tableSortDirection}
          onSortChange={handleTableSortChange}
        />
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
