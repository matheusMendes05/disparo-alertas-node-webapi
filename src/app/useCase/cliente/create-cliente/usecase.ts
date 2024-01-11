import { IClienteRepository } from '../../../repository/IClienteRepository';
import { ClienteModel } from '../../../models/cliente';

export class CreateClienteUseCase {
  constructor(private readonly clienteRepo: IClienteRepository) {}

  async execute(params: Params): Promise<Result> {
    const cliente = new ClienteModel({
      nome: params.nome,
      status: params.status,
    });

    const data = this.clienteRepo.save(cliente);

    return data;
  }
}

type Params = {
  nome: string;
  status?: boolean;
};

type Result = any;
