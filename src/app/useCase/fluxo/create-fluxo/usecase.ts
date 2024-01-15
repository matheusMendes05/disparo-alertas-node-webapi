import { ICrypter } from '../../encrypter';
import { IFluxoRepository } from '../../../repository/IFluxoRepository';
import { Fluxo } from '../../../entity/fluxo';
import { FluxoModel } from '../../../models/fluxo';

export class CreateFluxoUseCase {
  constructor(
    private readonly crypto: ICrypter,
    private readonly fluxoRepo: IFluxoRepository,
  ) {}

  async execute(params: Params): Promise<Fluxo> {
    const fluxo = new FluxoModel({
      projetoId: params.projetoId,
      nome: params.nome,
      status: params.status,
      flowId: this.crypto.encrypt(params.flowId),
    });
    const data = await this.fluxoRepo.save(fluxo);
    return data;
  }
}

type Params = {
  projetoId: string;
  nome: string;
  status: boolean;
  flowId: string;
};
