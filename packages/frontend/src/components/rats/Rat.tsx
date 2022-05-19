import React from 'react';
import {RatGroupsQuery} from '../../lib/graphql';
import {Ewar} from './Ewar';
import {Attack} from './Attack';
import {Defense} from './Defense';

export const Rat = ({rat}: { rat: RatGroupsQuery["ratGroups"][0]["rats"][0] }) => {

  return (
    <div id="npcEntity" className="row">
      <div className="col-md-12"><h3>{rat.name}
        <Ewar ewar={rat.ewar} />
      </h3>
      </div>
      <div className="col-md-4 hidden-xs"><img src={`/images/renders/256/${rat.graphicId}.jpg`} className="img-thumbnail render-icon" alt={rat.name}
                                               title={rat.name}/>
      </div>
      <div className="col-md-8">
        <Attack attackTypes={rat.attackTypes} attackAlpha={rat.attackAlpha} attackType={rat.attackType} attackDuration={rat.attackDuration} attackTypeId={rat.attackTypeId}/>
        <Defense hp={rat.hp} ehp={rat.ehp} shieldResistances={rat.shieldResistances} armorResistances={rat.armorResistances} structureResistances={rat.structureResistances} />
        <div className="row" style={{marginTop: '20px'}}>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item"><strong>Attack Range:</strong> {(rat.attackRange ?? 0).toLocaleString()} m</li>
              <li className="list-group-item"><strong>Orbit Range:</strong> {rat.orbitRange.toLocaleString()} m</li>
              <li className="list-group-item"><strong>Orbit Speed:</strong> {rat.orbitSpeed.toLocaleString()} m/s</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item"><strong>Chase Speed:</strong> {rat.chaseSpeed.toLocaleString()} m/s</li>
              <li className="list-group-item"><strong>Signature Radius:</strong> {rat.signatureRadius.toLocaleString()} m</li>
              <li className="list-group-item"><strong>Scan Resolution:</strong> {rat.scanResolution.toLocaleString()} mm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
