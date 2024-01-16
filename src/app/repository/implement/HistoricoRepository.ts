import { AppDataSource } from '../../../database/data-source';
import { Historico } from '../../entity/historico';
import { Projeto } from '../../entity/projeto';
import { HistoricoModel } from '../../models/historico';
import { IHistoricoRepository } from '../IHistoricoRepository';

export class HistoricoRepository implements IHistoricoRepository {
  private readonly projetoRepository = AppDataSource.getRepository(Projeto);
  private readonly historicoRepository = AppDataSource.getRepository(Historico);

  get(id: string): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<Historico[]> {
    const data = await this.historicoRepository.find({
      relations: {
        projeto: true,
      },
    });
    return data;
  }
  async save(model: HistoricoModel): Promise<Historico> {
    const projeto = await this.projetoRepository.findOneBy({
      id: model.projetoId,
    });
    const data = await this.historicoRepository.save({
      dataDisparo: model.dataDisparo,
      qtdUsuarios: model.qtdUsuarios,
      status: model.status,
      projeto: projeto,
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
