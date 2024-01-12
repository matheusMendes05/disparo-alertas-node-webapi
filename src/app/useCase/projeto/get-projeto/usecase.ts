import { Projeto } from '../../../entity/projeto';
import { IProjetoRepository } from '../../../repository/IProjetoRepository';

export class GetProjetoUseCase {
  constructor(private readonly projetoRepo: IProjetoRepository) {}
  async execute(params: Params): Promise<Projeto> {
    const data = await this.projetoRepo.get(params.id);
    return data;
  }
}

type Params = {
  id: string;
};
