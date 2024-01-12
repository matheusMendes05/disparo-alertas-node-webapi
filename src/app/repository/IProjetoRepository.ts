import { Projeto } from '../entity/projeto';
import { ProjetoModel } from '../models/projeto';

export interface IPorjetoRepository {
  save(projeto: ProjetoModel): Promise<Projeto>;
}
