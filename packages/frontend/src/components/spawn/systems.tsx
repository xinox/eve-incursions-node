import React, {Fragment, ReactNode} from 'react';
import {ActiveSpawnsQuery} from '../../lib/graphql';
import {System} from './system';

export const Systems = ({systems}: { systems: ActiveSpawnsQuery['activeSpawns'][0]['constellation']['systems'] }) => {
  const types = ['Staging', 'Vanguard', 'Assault', 'Headquarters', 'not known'];
  const sortedSystems = systems.sort((s1, s2) => types.indexOf(s1.type) - types.indexOf(s2.type));
  let lastType = '';

  return (
    <div className="systems table container">
      <div className="row head" key={'header'}>
        <div className="col-1"></div>
        <div className="col-4">Name</div>
        <div className="col text-right">Security</div>
        <div className="col text-right">Size <span style={{cursor: 'help'}} v-tooltip="'Aproximation of the longest Warp!'">(?)</span>
        </div>
      </div>
      {sortedSystems.map(system => {
        let typeHeader: ReactNode;
        if (system.type !== lastType) {
          typeHeader = (
            <div className="row system-type">
              <div className="col text-center">{system.type}</div>
            </div>
          );
          lastType = system.type;
        }

        return (<Fragment key={system.name}>
          {typeHeader}
          <System system={system}/>
        </Fragment>);
      })}
    </div>
  );
};
