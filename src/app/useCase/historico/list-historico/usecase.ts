import { Historico } from '../../../entity/Historico';
import { IHistoricoRepository } from '../../../repository/IHistoricoRepository';

export class ListHistoricoUseCase {
  constructor(private readonly HistoricoCliente: IHistoricoRepository) {}
  async execute(): Promise<Historico[]> {
    const data = await this.HistoricoCliente.list();
    return data;
  }
}
