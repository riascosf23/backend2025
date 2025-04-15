import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Empleos',
  connector: 'mongodb',
  url: 'mongodb+srv://riascosf23:1234@cluster0.odxzlkq.mongodb.net/Empleos?retryWrites=true&w=majority&appName=Cluster0',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'Empleos',
  useNewUrlParser: true
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
