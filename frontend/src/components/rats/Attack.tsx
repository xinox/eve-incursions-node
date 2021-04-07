import React from 'react';
import {Rat} from '../../lib/graphql';
import {DamageTypes, DamageTypesRow} from './DamageTypesRow';

type AttackProps = Pick<Rat, 'attackAlpha' | 'attackType' | 'attackTypeId' | 'attackTypes' | 'attackDuration'>

export const Attack = ({attackTypes, attackAlpha, attackType, attackTypeId, attackDuration}: AttackProps) => {
  if (!attackAlpha || !attackDuration || !attackType) return null;
  const dps = attackAlpha / attackDuration;
  const dpsAttackTypes = Object.fromEntries(Object.entries(attackTypes as DamageTypes).map(([k, v]) => [k, v / attackDuration]));


  return (
    <>
      <div className="row">
        <div className="col-1" style={{fontWeight: 'bold'}}>Alpha</div>
        <div className="col-3"><span title="Alpha"><img src={`https://images.evetech.net/types/${attackTypeId}/icon?size=32`} alt={attackType} className="small-icon"/> {attackAlpha.toLocaleString()}</span>
        </div>
        <div className="col-8">
          <DamageTypesRow damageTypes={attackTypes} total={attackAlpha}/>
        </div>
      </div>
      <div className="row">
        <div className="col-1" style={{fontWeight: 'bold'}}>DPS</div>
        <div className="col-3"><span title="DPS"><img src={`https://images.evetech.net/types/${attackTypeId}/icon?size=32`} alt={attackType} className="small-icon"/> {dps.toLocaleString([], {maximumFractionDigits: 1})}</span>
        </div>
        <div className="col-8">
          <DamageTypesRow damageTypes={dpsAttackTypes as DamageTypes} total={dps}/>
        </div>
      </div>
      <br/><br/>
    </>
  );
};
