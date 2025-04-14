import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EmpleosDataSource} from '../datasources';
import {Empleos, EmpleosRelations} from '../models';

export class EmpleosRepository extends DefaultCrudRepository<
  Empleos,
  typeof Empleos.prototype.id,
  EmpleosRelations
> {
  constructor(
    @inject('datasources.Empleos') dataSource: EmpleosDataSource,
  ) {
    super(Empleos, dataSource);
  }
}
