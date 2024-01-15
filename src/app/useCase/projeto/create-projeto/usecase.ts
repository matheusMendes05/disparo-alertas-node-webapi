import { Projeto } from '../../../entity/projeto';
import { ProjetoModel } from '../../../models/projeto';
import { IProjetoRepository } from '../../../repository/IProjetoRepository';

export class CreateProjetoUseCase {
  constructor(private readonly projetoRepo: IProjetoRepository) {}
  async execute(params: Params): Promise<Projeto> {
    const projeto = new ProjetoModel({
      clienteId: params.clienteId,
      dynamicsId: params.dynamicsId,
      nome: params.nome,
      status: params.status,
    });
    const data = await this.projetoRepo.save(projeto);
    return data;
  }
}

type Params = {
  clienteId: string;
  dynamicsId: string;
  nome: string;
  status?: boolean;
};
