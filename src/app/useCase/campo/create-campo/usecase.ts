import { ICampoRepository } from '../../../repository/ICampoRepository';
import { Campo } from '../../../entity/campo';
import { CampoModel } from '../../../models/campo';

export class CreateCampoUseCase {
  constructor(private readonly campoRepo: ICampoRepository) {}
  async execute(params: Params): Promise<Campo> {
    const campo = new CampoModel({
      nome: params.nome,
      formularioId: params.formularioId,
    });
    const data = await this.campoRepo.save(campo);
    return data;
  }
}

type Params = {
  nome: string;
  formularioId: string;
};
