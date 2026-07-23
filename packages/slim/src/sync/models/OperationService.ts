import {BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import {Station} from './Station';

@Entity({
  name: 'sta_operation_services'
})
export class OperationService extends BaseEntity {
  @ManyToOne(() => Station, station => station.operationServices)
  @JoinColumn({name: 'operationID', referencedColumnName: 'operationID'})
  station: Promise<Station>;

  @PrimaryColumn({name: 'serviceID'})
  serviceId: number;

  @PrimaryColumn({name: 'operationID'})
  operationId: number;
}
