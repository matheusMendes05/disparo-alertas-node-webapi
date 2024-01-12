import { Cliente } from '../../../entity/cliente';
import { ClienteModel } from '../../../models/cliente';
import { IClienteRepository } from '../../../repository/IClienteRepository';

export class UpdateClienteUseCase {
  constructor(private readonly clieteRepo: IClienteRepository) {}

  async execute(params: Params): Promise<Cliente> {
    const cliente = new ClienteModel({
      id: params.id,
      nome: params.nome,
      status: params.status,
    });
    const data = await this.clieteRepo.update(cliente);
    return data;
  }
}

type Params = {
  id: string;
  nome: string;
  status: boolean;
};
