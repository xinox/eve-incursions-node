import {Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {Spawn} from './Spawn';
import {System} from './System';
import {Region} from './Region';

@Entity({
  name: 'mapconstellations'
})
export class Constellation extends BaseEntity {
  @PrimaryColumn({name: 'constellationID'})
  id: number;
  @Column({name: 'constellationName'})
  name: string;

  @Column({name: 'regionID'})
  regionId: number;
  @OneToMany(() => Spawn, spawn => spawn.constellation)
  spawns: Promise<Spawn[]>;
  @OneToMany(() => System, s => s.constellation, {lazy: true})
  systems: Promise<System[]>;
  @ManyToOne(() => Region, r => r.constellations, {lazy: true})
  @JoinColumn({name: 'regionID'})
  region: Promise<Region>;
}
