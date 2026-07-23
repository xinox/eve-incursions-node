import {AfterLoad, BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {OperationService} from './OperationService';

@Entity({
  name: 'sta_stations'
})
export class Station extends BaseEntity {
  @PrimaryGeneratedColumn({name: 'stationID'})
  id: string;

  @Column({name: 'solarSystemID'})
  solarSystemID: number;

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
