import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Empleos} from '../models';
import {EmpleosRepository} from '../repositories';



export class EmpleosController {
  constructor(
    @repository(EmpleosRepository)
    public empleosRepository : EmpleosRepository,
  ) {}

  @post('/empleos')
  @response(200, {
    description: 'Empleos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empleos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleos, {
            title: 'NewEmpleos',
            exclude: ['id'],
          }),
        },
      },
    })
    empleos: Omit<Empleos, 'id'>,
  ): Promise<Empleos> {
    return this.empleosRepository.create(empleos);
  }

  @get('/empleos/count')
  @response(200, {
    description: 'Empleos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empleos) where?: Where<Empleos>,
  ): Promise<Count> {
    return this.empleosRepository.count(where);
  }

  @get('/empleos')
  @response(200, {
    description: 'Array of Empleos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empleos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empleos) filter?: Filter<Empleos>,
  ): Promise<Empleos[]> {
    return this.empleosRepository.find(filter);
  }

  @patch('/empleos')
  @response(200, {
    description: 'Empleos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleos, {partial: true}),
        },
      },
    })
    empleos: Empleos,
    @param.where(Empleos) where?: Where<Empleos>,
  ): Promise<Count> {
    return this.empleosRepository.updateAll(empleos, where);
  }

  @get('/empleos/{id}')
  @response(200, {
    description: 'Empleos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empleos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Empleos, {exclude: 'where'}) filter?: FilterExcludingWhere<Empleos>
  ): Promise<Empleos> {
    return this.empleosRepository.findById(id, filter);
  }

  @patch('/empleos/{id}')
  @response(204, {
    description: 'Empleos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleos, {partial: true}),
        },
      },
    })
    empleos: Empleos,
  ): Promise<void> {
    await this.empleosRepository.updateById(id, empleos);
  }

  @put('/empleos/{id}')
  @response(204, {
    description: 'Empleos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() empleos: Empleos,
  ): Promise<void> {
    await this.empleosRepository.replaceById(id, empleos);
  }

  @del('/empleos/{id}')
  @response(204, {
    description: 'Empleos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.empleosRepository.deleteById(id);
  }
}
