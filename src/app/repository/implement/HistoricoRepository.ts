import { Historico } from '../../entity/historico';
import { HistoricoModel } from '../../models/historico';
import { IHistoricoRepository } from '../IHistoricoRepository';

export class HistoricoRepository implements IHistoricoRepository {
  get(id: string): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Historico[]> {
    throw new Error('Method not implemented.');
  }
  save(model: HistoricoModel): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  update(model: HistoricoModel): Promise<Historico> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
