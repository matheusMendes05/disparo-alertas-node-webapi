import { IFluxoRepository } from '../../../repository/IFluxoRepository';
import { Fluxo } from '../../../entity/fluxo';

export class GetFluxoUseCase {
  constructor(private readonly FluxoRepo: IFluxoRepository) {}
  async execute(params: Params): Promise<Fluxo> {
    const data = await this.FluxoRepo.get(params.id);
    return data;
  }
}

type Params = {
  id: string;
};
