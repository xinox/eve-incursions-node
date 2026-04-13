import {classNames} from '../../lib/utils';

interface DamageTypeProps {
  type: 'em' | 'kinetic' | 'explosive' | 'thermal';
  label: string;
  percentage: number;
}

export const DamageTypeCol = ({type, label, percentage}: DamageTypeProps) => {
  return (
    <div className={classNames("col-3", "resi-bar", type)} title={type}><img src={`/images/${type}.png`} alt={type} className="resi-icon"/>
      <div className="resi-background">
        <div className="resi-text">{label}</div>
        <div className="resi-inner" style={{width: (percentage * 100) + '%'}}/>
      </div>
    </div>
  );
}
