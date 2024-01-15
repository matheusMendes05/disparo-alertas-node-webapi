import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';
import { Dynamics } from '../../../entity/dynamics';
import { DynamicsModel } from '../../../models/dynamics';
import { ICrypter } from '../../encrypter';

export class UpdateDynamicsUseCase {
  constructor(
    private readonly crypter: ICrypter,
    private readonly dynamicsRepo: IDynamicsRepository,
  ) {}
  async execute(params: Params): Promise<Dynamics> {
    const dynamics = new DynamicsModel({
      id: params.id,
      urlBase: this.crypter.encrypt(params.urlBase),
      urlContacts: this.crypter.encrypt(params.urlContacts),
      clientId: this.crypter.encrypt(params.clientId),
      clienteSecret: this.crypter.encrypt(params.clienteSecret),
      scope: this.crypter.encrypt(params.scope),
      resource: this.crypter.encrypt(params.resource),
      sql: params.sql,
    });

    const data = await this.dynamicsRepo.update(dynamics);
    return data;
  }
}

type Params = {
  id: string;
  urlBase?: string;
  urlContacts?: string;
  clientId?: string;
  clienteSecret?: string;
  scope?: string;
  resource?: string;
  sql?: string;
};
