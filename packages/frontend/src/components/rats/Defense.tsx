import {Rat} from '../../lib/graphql';
import {DamageTypesRow} from './DamageTypesRow';

type DefenseProps = Pick<Rat, 'hp' | 'ehp' | 'armorResistances' | 'shieldResistances' | 'structureResistances'>

export const Defense = ({hp, ehp, armorResistances, shieldResistances, structureResistances}: DefenseProps) => {
  return (
    <>
      <div className="row">
        <div className="col-1" style={{fontWeight: 'bold'}}>Shield</div>
        <div className="col-3">
          <span title="HP" className="badge bg-primary">{hp.shield.toLocaleString()}</span> <span title="EHP"
                                                                                                  className="badge bg-warning hidden-xs">{ehp.shield.toLocaleString([], {maximumFractionDigits: 1})}</span>
        </div>
        <div className="col-8">
          <DamageTypesRow damageTypes={shieldResistances}/>
        </div>
      </div>
      <div className="row">
        <div className="col-1" style={{fontWeight: 'bold'}}>Armor</div>
        <div className="col-3">
          <span title="HP" className="badge bg-primary">{hp.armor.toLocaleString()}</span> <span title="EHP"
                                                                                                 className="badge bg-warning hidden-xs">{ehp.armor.toLocaleString([], {maximumFractionDigits: 1})}</span>
        </div>
        <div className="col-8">
          <DamageTypesRow damageTypes={armorResistances}/>
        </div>
      </div>
      <div className="row">
        <div className="col-1" style={{fontWeight: 'bold'}}>Structure</div>
        <div className="col-3">
          <span title="HP" className="badge bg-primary">{hp.structure.toLocaleString()}</span> <span title="EHP"
                                                                                                     className="badge bg-warning hidden-xs">{ehp.structure.toLocaleString([], {maximumFractionDigits: 1})}</span>
        </div>
        <div className="col-8">
          <DamageTypesRow damageTypes={structureResistances}/>
        </div>
      </div>
      <div className="row">
        <div className="col-1"><strong>Total</strong></div>
        <div className="col-3">
          <span title="HP" className="badge bg-primary">{hp.total.toLocaleString()}</span> <span title="EHP"
                                                                                                 className="badge bg-warning hidden-xs">{ehp.total.toLocaleString([], {maximumFractionDigits: 1})}</span>
        </div>
        <div className="col-8"/>
      </div>
    </>
  );
};
