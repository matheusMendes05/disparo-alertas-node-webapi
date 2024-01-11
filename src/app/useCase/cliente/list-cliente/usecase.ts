import { Cliente } from '../../../entity/cliente';
import { IClienteRepository } from '../../../repository/IClienteRepository';

export class ListClienteUseCase {
  constructor(private readonly clienteRepo: IClienteRepository) {}

  async execute(): Promise<Cliente[]> {
    const data = await this.clienteRepo.list();
    return data;
  }
}
