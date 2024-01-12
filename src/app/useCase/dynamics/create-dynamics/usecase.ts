import { Dynamics } from '../../../entity/dynamics';
import { DynamicsModel } from '../../../models/dynamics';
import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';
import { ICrypter } from '../../encrypter';

export class CreateDynamicsUseCase {
  constructor(
    private readonly crypter: ICrypter,
    private readonly dynamicsRepo: IDynamicsRepository,
  ) {}
  async execute(params: DynamicsModel): Promise<Dynamics> {
    const dynamics = new DynamicsModel({
      projetoId: params.projetoId,
      urlBase: await this.crypter.encrypt(params.urlBase),
      urlContacts: await this.crypter.encrypt(params.urlContacts),
      clientId: await this.crypter.encrypt(params.clientId),
      clienteSecret: await this.crypter.encrypt(params.clienteSecret),
      scope: await this.crypter.encrypt(params.scope),
      resource: await this.crypter.encrypt(params.resource),
      sql: params.sql,
    });
    const data = await this.dynamicsRepo.save(dynamics);
    return data;
  }
}
