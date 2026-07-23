import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Spawn} from './Spawn';

@Entity({
  name: 'spawn_logs'
})
export class SpawnLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  state: string;
  @Column()
  date: Date;

  @Column({name: 'spawn_id'})
  spawnId: number;
  @ManyToOne(() => Spawn, c => c.logs)
  @JoinColumn({name: 'spawn_id'})
  spawn: Promise<Spawn>;
}
