import {BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity({
  name: 'sta_operation_services'
})
export class OperationService extends BaseEntity {
  @PrimaryColumn({name: 'serviceID'})
  serviceId: number;

  @PrimaryColumn({name: 'operationID'})
  operationId: number;
}
