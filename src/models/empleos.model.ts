import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Empleos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  edad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
  })
  talento: string;

  

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleos>) {
    super(data);
  }
}

export interface EmpleosRelations {
  // describe navigational properties here
}

export type EmpleosWithRelations = Empleos & EmpleosRelations;
