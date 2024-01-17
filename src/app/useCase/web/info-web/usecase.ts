import { IAlertaRepository } from '../../../repository/IAlertaRepository';

export class InfoWebUseCase {
  constructor(private readonly alertaRepo: IAlertaRepository) {}

  async execute(params: Params): Promise<Result> {
    const data = await this.alertaRepo.getInfo({
      clienteId: params.clienteId,
      projetoId: params.projetoId,
    });
    return data;
  }
}

type Params = {
  clienteId: string;
  projetoId: string;
};

type Result = any;
