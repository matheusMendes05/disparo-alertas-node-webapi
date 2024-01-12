import { IProjetoRepository } from '../../../repository/IProjetoRepository';
import { ProjetoModel } from '../../../models/projeto';
import { Projeto } from '../../../entity/projeto';

export class UpdateProjetoUseCase {
  constructor(private readonly projetoRepo: IProjetoRepository) {}
  async execute(params: Params): Promise<Projeto> {
    const projeto = new ProjetoModel({
      id: params.id,
      nome: params.nome,
      status: params.status,
    });
    const data = await this.projetoRepo.update(projeto);
    return data;
  }
}

type Params = {
  id: string;
  nome: string;
  status?: boolean;
  clientId?: string;
};
