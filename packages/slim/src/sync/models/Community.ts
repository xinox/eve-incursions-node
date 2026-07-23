import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'communities'
})
export class Community extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name: 'communityName'})
  name: string;
  @Column({name: 'communityTag'})
  tag: string;
  @Column()
  channel: string;
  @Column()
  language: string;
  @Column()
  tank: string;
  @Column()
  active: boolean;
  @Column()
  timezone: string;
  @Column({name: 'isHQ'})
  hq: boolean;
  @Column({name: 'isAS'})
  as: boolean;
  @Column({name: 'isVG'})
  vg: boolean;

}
