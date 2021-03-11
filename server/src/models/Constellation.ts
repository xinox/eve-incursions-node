import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { ObjectType, Field, ID } from "type-graphql";
import {Spawn} from './Spawn';
import {System} from './System';
import {Region} from './Region';

@Entity({
  name: 'mapconstellations'
})
@ObjectType()
export class Constellation extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({name: 'constellationID'})
  id: string;

  @Field(() => String)
  @Column({name: 'constellationName'})
  name: string;

  @Field(() => [Spawn])
  @OneToMany(() => Spawn, spawn => spawn.constellation)
  spawns: Promise<Spawn[]>;

  @Field(() => [System])
  @OneToMany(() => System, s => s.constellation, {lazy: true})
  systems: Promise<System[]>;

  @Field(() => Region)
  @ManyToOne(() => Region, r => r.constellations, {lazy: true})
  region: Promise<Region>;
}
