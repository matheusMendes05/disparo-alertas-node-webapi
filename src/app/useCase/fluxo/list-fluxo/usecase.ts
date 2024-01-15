import { Fluxo } from '../../../entity/fluxo';
import { IFluxoRepository } from '../../../repository/IFluxoRepository';

export class ListFluxoUseCase {
  constructor(private readonly fluxoRepo: IFluxoRepository) {}
  async execute(): Promise<Fluxo[]> {
    const data = await this.fluxoRepo.list();
    return data;
  }
}
