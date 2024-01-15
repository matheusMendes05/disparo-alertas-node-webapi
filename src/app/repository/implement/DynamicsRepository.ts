import { AppDataSource } from '../../../database/data-source';
import { Dynamics } from '../../entity/dynamics';
import { DynamicsModel } from '../../models/dynamics';
import { IDynamicsRepository } from '../IDynamicsRepository';

export class DynamicsRepository implements IDynamicsRepository {
  private dynamicsRepository = AppDataSource.getRepository(Dynamics);

  async get(id: string): Promise<Dynamics> {
    const data = await this.dynamicsRepository.findOneBy({ id });
    return data;
  }
  async list(): Promise<Dynamics[]> {
    const data = await this.dynamicsRepository.find({
      relations: {
        projeto: true,
      },
    });
    return data;
  }
  async save(model: DynamicsModel): Promise<Dynamics> {
    const data = await this.dynamicsRepository.save(model);
    return data;
  }
  update(model: DynamicsModel): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.dynamicsRepository.delete({ id });
  }
}
