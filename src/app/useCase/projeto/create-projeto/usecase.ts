import { Projeto } from '../../../entity/projeto';
import { ProjetoModel } from '../../../models/projeto';
import { IPorjetoRepository } from '../../../repository/IProjetoRepository';

export class CreateProjetoUseCase {
  constructor(private readonly projetoRepo: IPorjetoRepository) {}
  async execute(params: Params): Promise<Projeto> {
    const projeto = new ProjetoModel({
      clienteId: params.clienteId,
      nome: params.nome,
      status: params.status,
    });
    const data = await this.projetoRepo.save(projeto);
    return data;
  }
}

type Params = {
  clienteId: string;
  nome: string;
  status?: boolean;
};
