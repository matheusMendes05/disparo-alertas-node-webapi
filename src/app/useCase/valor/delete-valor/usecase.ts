import { IValorRepository } from '../../../repository/IValorRepository';

export class DeleteValorUseCase {
  constructor(private readonly ValorRepo: IValorRepository) {}
  async execute(params: Params): Promise<void> {
    await this.ValorRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
