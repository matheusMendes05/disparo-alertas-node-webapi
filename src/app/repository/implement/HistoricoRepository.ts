import { AppDataSource } from '../../../database/data-source';
import { Historico } from '../../entity/historico';
import { HistoricoModel } from '../../models/historico';
import { IHistoricoRepository } from '../IHistoricoRepository';

export class HistoricoRepository implements IHistoricoRepository {
  private readonly historicoRepository = AppDataSource.getRepository(Historico);

  get(id: string): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Historico[]> {
    throw new Error('Method not implemented.');
  }
  async save(model: HistoricoModel): Promise<Historico> {
    const data = await this.historicoRepository.save({
      dataDisparo: model.dataDisparo,
      qtdUsuarios: model.qtdUsuarios,
      status: model.status,
    });
    return data;
  }
  update(model: HistoricoModel): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.historicoRepository.delete({ id });
  }
}
