import {Fragment, ReactNode} from 'react';
import {SpawnLogsQuery} from '../lib/graphql';
import {GetServerSideProps} from 'next';
import {dotlanTransform} from '../lib/utils';
import {getSpawnLogs} from '../lib/db';
import {setSharedCache} from '../lib/cache';

export const getServerSideProps: GetServerSideProps = async ({query: {page = 1}, res}) => {
  setSharedCache(res, 30, 300);
  const {spawnLogs: {items, total}} = await getSpawnLogs(Number(page));
  return {props: {spawnLogs: items, total}};
};

interface HistoryProps {
  spawnLogs: SpawnLogsQuery['spawnLogs']['items'];
  total: SpawnLogsQuery['spawnLogs']['total'];
}

// Format in a fixed locale + UTC so the server and client agree (EVE time is UTC).
// This is what fixes the previous hydration mismatch on the date grouping.
const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'});
const fmtTime = (d: Date) => d.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'});

const parseLogDate = (value: string | null | undefined) => {
  if (!value) return null;

  const normalized = /^\d{4}-\d{2}-\d{2} /.test(value) ? value.replace(' ', 'T') + 'Z' : value;
  const date = new Date(normalized);

  return Number.isNaN(date.getTime()) ? null : date;
};

export default function History({spawnLogs}: HistoryProps) {
  let previousDate = '';

  return (
    <>
      <h1>Spawn History</h1>
      <div className="table-wrap" style={{marginTop: 'var(--sp-5)'}}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Constellation</th>
              <th className="hidden-xs">Region</th>
              <th>Staging System</th>
              <th>State</th>
              <th/>
              <th className="hidden-xs">Sov. Holder</th>
            </tr>
          </thead>
          <tbody>
            {spawnLogs.map(logEntry => {
              const date = parseLogDate(logEntry.date);
              const dateString = date ? fmtDate(date) : 'Unknown date';

              let dateNode: ReactNode;
              if (dateString !== previousDate) {
                dateNode = (
                  <tr className="group-row">
                    <th colSpan={7}>{dateString}</th>
                  </tr>
                );
                previousDate = dateString;
              }

              return (
                <Fragment key={logEntry.id}>
                  {dateNode}
                  <tr>
                    <td style={{fontVariantNumeric: 'tabular-nums'}}>{date ? fmtTime(date) : '-'}</td>
                    <td><a
                      href={`http://evemaps.dotlan.net/map/${dotlanTransform(logEntry.spawn.constellation.region.name)}/${dotlanTransform(logEntry.spawn.constellation.name)}#radius`}
                      target="_blank" rel="noopener">{logEntry.spawn.constellation.name}</a></td>
                    <td className="hidden-xs"><a href={`http://evemaps.dotlan.net/map/${dotlanTransform(logEntry.spawn.constellation.region.name)}`}
                                                 target="_blank" rel="noopener">{logEntry.spawn.constellation.region.name}</a></td>
                    <td><a href={`http://evemaps.dotlan.net/system/${dotlanTransform(logEntry.spawn.stagingSystem.name)}`}
                           target="_blank" rel="noopener">{logEntry.spawn.stagingSystem.name}</a></td>
                    <td className={`state state-${logEntry.state.toLocaleLowerCase()}`}>{logEntry.state}</td>
                    <td>
                      <img style={{width: '18px'}}
                           src={`https://images.evetech.net/${logEntry.spawn.stagingSystem.sovereigntyHolderID < 600000 ? 'corporations' : 'alliances'}/${logEntry.spawn.stagingSystem.sovereigntyHolderID}/logo?size=64`}
                           title={logEntry.spawn.stagingSystem.sovereigntyHolderName}
                           alt={logEntry.spawn.stagingSystem.sovereigntyHolderName}/>
                    </td>
                    <td className="hidden-xs">{logEntry.spawn.stagingSystem.sovereigntyHolderName}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

