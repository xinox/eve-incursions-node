import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, AfterLoad, OneToMany, getConnection} from 'typeorm';
import {ObjectType, Field, ID, Float} from 'type-graphql';
import {Constellation} from './Constellation';
import {System} from './System';
import {InfluenceLogEntry} from './InfluenceLogEntry';
import {Spawn} from './Spawn';

@Entity({
  name: 'spawn_logs'
})
@ObjectType()
export class SpawnLog extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  state: string;

  @Field(() => Date)
  @Column()
  date: Date;

  @Field(() => Spawn)
  @ManyToOne(() => Spawn, c => c.logs)
  @JoinColumn({ name: "spawn_id" })
  spawn: Promise<Spawn>;
}
