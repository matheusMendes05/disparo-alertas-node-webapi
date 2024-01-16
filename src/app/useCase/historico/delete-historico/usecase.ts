import { IHistoricoRepository } from '../../../repository/IHistoricoRepository';

export class DeleteHistoricoUseCase {
  constructor(private readonly HistoricoRepo: IHistoricoRepository) {}
  async execute(params: Params): Promise<void> {
    await this.HistoricoRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
