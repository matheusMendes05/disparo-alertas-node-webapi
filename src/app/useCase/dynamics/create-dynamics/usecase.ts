import { Dynamics } from '../../../entity/dynamics';
import { DynamicsModel } from '../../../models/dynamics';
import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';

export class CreateDynamicsUseCase {
  constructor(private readonly dynamicsRepo: IDynamicsRepository) {}
  async execute(params: DynamicsModel): Promise<Dynamics> {
    const dynamics = new DynamicsModel({
      projetoId: params.projetoId,
      urlBase: params.urlBase,
      urlContacts: params.urlContacts,
      clientId: params.clientId,
      clienteSecret: params.clienteSecret,
      scope: params.scope,
      resource: params.resource,
      sql: params.sql,
    });
    const data = await this.dynamicsRepo.save(dynamics);
    return data;
  }
}
