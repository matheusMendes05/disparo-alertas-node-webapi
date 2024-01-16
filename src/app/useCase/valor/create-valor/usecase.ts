import { IValorRepository } from '../../../repository/IValorRepository';
import { Valor } from '../../../entity/valor';
import { ValorModel } from '../../../models/valor';

export class CreateValorUseCase {
  constructor(private readonly valorRepo: IValorRepository) {}
  async execute(params: Params): Promise<Valor> {
    const valor = new ValorModel({
      valor: params.valor,
      campoId: params.campoId,
    });
    const data = await this.valorRepo.save(valor);
    return data;
  }
}

type Params = {
  valor: string;
  campoId: string;
};
