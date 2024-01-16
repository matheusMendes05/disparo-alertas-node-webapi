import { IProjetoRepository } from '../../../repository/IProjetoRepository';

export class InfoWebUseCase {
  constructor(private readonly projetoRepo: IProjetoRepository) {}

  async execute(params: Params): Promise<Result> {
    const data = await this.projetoRepo.listProjectbyClient({
      clienteId: params.clienteId,
      projetoId: params.projetoId,
    });
    return data;
  }
}

type Params = {
  clienteId: string;
  projetoId: string;
};

type Result = any;
