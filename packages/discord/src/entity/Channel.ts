import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class Channel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    guildId: string

    @Column()
    channelId: string

    @Column()
    high: boolean

    @Column()
    low: boolean

    @Column()
    null: boolean

    @Column()
    startOnly: boolean
}
