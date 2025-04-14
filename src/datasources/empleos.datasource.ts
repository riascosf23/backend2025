import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Empleos',
  connector: 'mongodb',
  url: 'mongodb+srv://riascosf23:king1234@cluster0.odxzlkq.mongodb.net/',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'Empleos',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class EmpleosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Empleos';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Empleos', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
