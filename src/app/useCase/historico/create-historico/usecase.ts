import { IHistoricoRepository } from '../../../repository/IHistoricoRepository';
import { Historico } from '../../../entity/historico';
import { HistoricoModel } from '../../../models/historico';

export class CreateHistoricoUseCase {
  constructor(private readonly historicoRepo: IHistoricoRepository) {}

  async execute(params: Params): Promise<Historico> {
    const historico = new HistoricoModel({
      dataDisparo: new Date(params.dataDisparo),
      qtdUsuarios: params.qtdUsuarios,
      status: params.status,
      projetoId: params.projetoId,
    });
    const data = await this.historicoRepo.save(historico);
    return data;
  }
}

type Params = {
  dataDisparo: string;
  qtdUsuarios: number;
  status: boolean;
  projetoId: string;
};
