import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import {ObjectType, Field, ID, Float} from 'type-graphql';
import {Spawn} from './Spawn';
import {System} from './System';
import {Region} from './Region';

@Entity({
  name: 'spawn_influence_logs'
})
@ObjectType()
export class InfluenceLogEntry extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Float)
  @Column()
  influence: number;

  @Field(() => Date)
  @Column()
  date: Date;

  @Field(() => [Spawn])
  @ManyToOne(() => Spawn, spawn => spawn.influenceLogs)
  @JoinColumn({ name: "spawn_id" })
  spawn: Promise<Spawn[]>;
}
