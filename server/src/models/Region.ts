import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { ObjectType, Field, ID } from "type-graphql";
import {Spawn} from './Spawn';
import {System} from './System';
import {Constellation} from './Constellation';

@Entity({
  name: 'mapregions'
})
@ObjectType()
export class Region extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({name: 'regionID'})
  id: string;

  @Field(() => String)
  @Column({name: 'regionName'})
  name: string;

  @OneToMany(() => Constellation, c => c.region)
  constellations: Promise<Constellation[]>;
}
