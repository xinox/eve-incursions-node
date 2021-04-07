import {ActiveSpawnsQuery, RatGroupsQuery} from '../../lib/graphql';
import React from 'react';

export const Ewar = ({ewar}: { ewar: RatGroupsQuery['ratGroups'][0]['rats'][0]['ewar'] }) => {
  if (ewar.length === 0) return null;

  return (<span className="badge">
    {ewar.map(({name, id, values}) => {
      const title = [name, ...values.map(({name, value, unit}) => `${name}: ${value.toLocaleString()}${unit ? ' ' + unit : ''}`)].join(' | ');

      return (<img src={`https://images.evetech.net/types/${id}/icon?size=32`} key={name} className="small-icon" alt={name}
                   title={title} />);
    })}
  </span>);
};
