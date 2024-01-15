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
      chave: this.crypto.encrypt(params.chave),
      valor: this.crypto.encrypt(params.valor),
    });
    const data = await this.fluxoRepo.save(fluxo);
    return data;
  }
}

type Params = {
  projetoId: string;
  nome: string;
  status: boolean;
  chave: string;
  valor: string;
};
