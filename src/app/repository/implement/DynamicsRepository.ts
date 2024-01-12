import { AppDataSource } from '../../../database/data-source';
import { Dynamics } from '../../entity/dynamics';
import { DynamicsModel } from '../../models/dynamics';
import { IDynamicsRepository } from '../IDynamicsRepository';

export class DynamicsRepository implements IDynamicsRepository {
  private dynamicsRepository = AppDataSource.getRepository(Dynamics);

  get(id: string): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Dynamics[]> {
    throw new Error('Method not implemented.');
  }
  save(model: DynamicsModel): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  update(model: DynamicsModel): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
