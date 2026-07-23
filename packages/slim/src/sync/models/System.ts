import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from 'typeorm';
import {Constellation} from './Constellation';
import {Station} from './Station';

@Entity({
  name: 'solar_systems'
})
export class System extends BaseEntity {
  @PrimaryColumn({name: 'solarSystemID'})
  id: number;
  @Column({name: 'solarSystemName'})
  name: string;
  @ManyToOne(() => Constellation, c => c.systems, {lazy: true})
  @JoinColumn({name: 'constellationID'})
  constellation: Promise<Constellation>;
  @OneToMany(() => Station, station => station.system, {lazy: true})
  stations: Promise<Station[]>;

  @Column({name: 'constellationID'})
  constellationId: number;
  @Column()
  sovereigntyHolderID: number;
  @Column()
  sovereigntyHolderName: string;
  @Column()
  isIsland: boolean;
  @Column({
    name: 'systemSize',
    transformer: {
      from: value => value != null && !isNaN(parseInt(value)) ? (parseInt(value) + 17) * 2 : 0,
      to: value => value
    }
  })
  size: number;
  @Column({
    type: "float",
    transformer: {
      from: value => (value > 0) ? +parseFloat(value).toFixed(1) : +parseFloat(value).toFixed(2),
      to: value => value
    }
  })
  security: number;
  @Column({name: 'systemType'})
  type: string;
  hasRepairStation: boolean = false;
  get securityArea() {
    if (this.security <= 0) {
      return 'null';
    } else if (this.security >= 0.5) {
      return 'high';
    } else {
      return 'low';
    }
  }

}
