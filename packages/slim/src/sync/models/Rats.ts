import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export class HP {
  total: number;
  shield: number;
  armor: number;
  structure: number;
}

export class DamageTypes {
  kinetic: number;
  thermal: number;
  em: number;
  explosive: number;
}

export class EwarValues {
  name: string;
  value: number;
  unit?: string;
}

export class Ewar {
  id: number;
  name: string;
  values: EwarValues[];
}


export class Rat {
  name: string;
  id: number;
  graphicId: number;
  groupId: number;
  hp: HP;
  ehp: HP;
  attackTypeId: number;
  attackType: 'Laser' | 'Missile';
  attackMultiplier: number;
  attackDuration: number;
  attackAlpha: number;
  attackTypes: DamageTypes;
  shieldResistances: DamageTypes;
  armorResistances: DamageTypes;
  structureResistances: DamageTypes;
  attackRange: number;
  orbitRange: number;
  orbitSpeed: number;
  chaseSpeed: number;
  signatureRadius: number;
  scanResolution: number;
  ewar: Ewar[];
}

@Entity({name: 'rat_groups'})
export class RatGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('simple-json')
  rats: Rat[];
}
