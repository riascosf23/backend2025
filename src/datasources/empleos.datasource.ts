import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Empleos',
  connector: 'mongodb',
  url: 'mongodb+srv://riascosf23:king1234@cluster0.odxzlkq.mongodb.net/Empleos?retryWrites=true&w=majority&tls=true',
  host: '', // Dejado vacío porque la URL ya incluye esta info
  port: 0, // Dejado como 0 porque la URL ya lo maneja
  user: '', // Dejado vacío (el usuario está en la URL)
  password: '', // Dejado vacío (la contraseña está en la URL)
  database: 'Empleos', // Se mantiene pero es redundante (ya está en la URL)
  useNewUrlParser: true // Cambiado a true (requerido para MongoDB Driver moderno)
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
