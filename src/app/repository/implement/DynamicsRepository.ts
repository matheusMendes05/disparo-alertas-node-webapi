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
  async update(model: DynamicsModel): Promise<Dynamics> {
    await this.dynamicsRepository.update(model.id, {
      urlBase: model.urlBase,
      urlContacts: model.urlContacts,
      clientId: model.clientId,
      clienteSecret: model.clienteSecret,
      scope: model.scope,
      resource: model.resource,
      sql: model.sql,
    });
    const data = await this.dynamicsRepository.findOneBy({ id: model.id });
    return data;
  }
  async delete(id: string): Promise<void> {
    await this.dynamicsRepository.delete({ id });
  }
}
