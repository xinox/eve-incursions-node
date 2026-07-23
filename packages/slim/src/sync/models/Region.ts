import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {Constellation} from './Constellation';

@Entity({
  name: 'mapregions'
})
export class Region extends BaseEntity {
  @PrimaryColumn({name: 'regionID'})
  id: number;
  @Column({name: 'regionName'})
  name: string;

  @OneToMany(() => Constellation, c => c.region)
  constellations: Promise<Constellation[]>;
}
