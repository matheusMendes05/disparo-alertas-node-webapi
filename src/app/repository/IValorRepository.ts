import { Valor } from '../entity/valor';
import { ValorModel } from '../models/valor';

export interface IValorRepository {
  get(id: string): Promise<Valor>;
  list(): Promise<Valor[]>;
  save(model: ValorModel): Promise<Valor>;
  update(model: ValorModel): Promise<Valor>;
  delete(id: string): Promise<void>;
}
