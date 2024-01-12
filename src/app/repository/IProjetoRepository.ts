import { Projeto } from '../entity/projeto';
import { ProjetoModel } from '../models/projeto';

export interface IPorjetoRepository {
  list(): Promise<Projeto[]>;
  save(projeto: ProjetoModel): Promise<Projeto>;
  delete(id: string): Promise<void>;
}
