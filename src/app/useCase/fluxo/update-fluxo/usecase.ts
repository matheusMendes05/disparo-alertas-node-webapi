import { IFluxoRepository } from '../../../repository/IFluxoRepository';
import { Fluxo } from '../../../entity/fluxo';
import { FluxoModel } from '../../../models/fluxo';
import { ICrypter } from '../../encrypter';

export class UpdateFluxoUseCase {
  constructor(
    private readonly crypto: ICrypter,
    private readonly fluxoRepo: IFluxoRepository,
  ) {}
  async execute(params: Params): Promise<Fluxo> {
    const fluxo = new FluxoModel({
      id: params.id,
      nome: params.nome,
      status: params.status,
      flowId: this.crypto.encrypt(params.flowId),
    });
    const data = await this.fluxoRepo.update(fluxo);
    return data;
  }
}

type Params = {
  id: string;
  nome?: string;
  status?: boolean;
  flowId?: string;
  projetoId?: string;
};
