import { IFluxoRepository } from '../../../repository/IFluxoRepository';

export class DeleteFluxoUseCase {
  constructor(private readonly fluxoRepo: IFluxoRepository) {}
  async execute(params: Params): Promise<void> {
    await this.fluxoRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
