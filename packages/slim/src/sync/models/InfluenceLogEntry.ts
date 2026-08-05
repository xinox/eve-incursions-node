import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Spawn} from './Spawn';
import {getDateColumnType} from '../../lib/config';

@Entity({
  name: 'spawn_influence_logs'
})
export class InfluenceLogEntry extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'float'})
  influence: number;
  @Column({type: getDateColumnType()})
  date: Date;

  @Column({name: 'spawn_id'})
  spawnId: number;
  @ManyToOne(() => Spawn, spawn => spawn.influenceLogs)
  @JoinColumn({name: 'spawn_id'})
  spawn: Promise<Spawn>;
}
