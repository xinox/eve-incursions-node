import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
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
