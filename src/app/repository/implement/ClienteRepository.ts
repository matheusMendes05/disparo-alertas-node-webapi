import { IClienteRepository } from '../IClienteRepository';
import { Cliente } from '../../entity/cliente';
import { ClienteModel } from '../../models/cliente';

import { AppDataSource } from '../../../database/data-source';

export class ClienteRepository implements IClienteRepository {
  private cliente = AppDataSource.getRepository(Cliente);

  async save(cliente: ClienteModel): Promise<Cliente> {
    const data = await this.cliente.save(cliente);
    return data;
  }
}
