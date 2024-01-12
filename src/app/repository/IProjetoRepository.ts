import { Projeto } from '../entity/projeto';
import { ProjetoModel } from '../models/projeto';

export interface IProjetoRepository {
  get(id: string): Promise<Projeto>;
  list(): Promise<Projeto[]>;
  save(model: ProjetoModel): Promise<Projeto>;
  update(model: ProjetoModel): Promise<Projeto>;
  delete(id: string): Promise<void>;
}
