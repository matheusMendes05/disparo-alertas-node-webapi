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
  async get(id: string): Promise<Cliente> {
    const data = await this.cliente.findOneBy({ id: id });
    return data;
  }
  async list(): Promise<Cliente[]> {
    const data = await this.cliente.find();
    return data;
  }
  async delete(id: string): Promise<void> {
    await this.cliente.delete(id);
  }
  async update(cliente: ClienteModel): Promise<Cliente> {
    await this.cliente.update(cliente.id, {
      nome: cliente.nome,
      status: cliente.status,
    });
    const data = await this.cliente.findOneBy({ id: cliente.id });
    return data;
  }
}
