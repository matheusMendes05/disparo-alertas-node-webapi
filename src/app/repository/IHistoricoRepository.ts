import { Historico } from '../entity/historico';
import { HistoricoModel } from '../models/historico';

export interface IHistoricoRepository {
  get(id: string): Promise<Historico>;
  list(): Promise<Historico[]>;
  save(model: HistoricoModel): Promise<Historico>;
  update(model: HistoricoModel): Promise<Historico>;
  delete(id: string): Promise<void>;
}
