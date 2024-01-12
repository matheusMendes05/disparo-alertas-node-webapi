import { IPorjetoRepository } from '../../../repository/IProjetoRepository';
export class DeleteProjetoUseCase {
  constructor(private readonly projetoRepo: IPorjetoRepository) {}

  async execute(params: Params): Promise<void> {
    await this.projetoRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
