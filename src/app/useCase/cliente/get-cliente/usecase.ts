import { Cliente } from '../../../entity/cliente';
import { IClienteRepository } from '../../../repository/IClienteRepository';

export class GetClienteUseCase {
  constructor(private readonly clienteRepo: IClienteRepository) {}
  async execute(params: Params): Promise<Cliente> {
    const data = await this.clienteRepo.get(params.id);
    return data;
  }
}

type Params = {
  id: string;
};
