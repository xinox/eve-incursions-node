import {AfterLoad, BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {System} from './System';
import {OperationService} from './OperationService';

@Entity({
  name: 'sta_stations'
})
export class Station extends BaseEntity {
  @PrimaryGeneratedColumn({name: 'stationID'})
  id: string;

  @ManyToOne(() => System, system => system.stations)
  @JoinColumn({name: 'solarSystemID'})
  system: Promise<System>;

  @Column({name: 'solarSystemID'})
  solarSystemID: number;

  @OneToMany(() => OperationService, os => os.station, {eager: true, lazy: true})
  operationServices: Promise<OperationService[]>;

  @Column({name: 'operationID'})
  operationID: number;
  @Column({name: 'stationName'})
  name: string;
  hasRepairService: Promise<boolean>;

  @AfterLoad()
  private async setHasRepairService() {
    this.hasRepairService = OperationService.count({
      where: {
        operationId: this.operationID,
        serviceId: 4096
      }
    }).then(v => v > 0);
  }
}
