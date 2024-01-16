import { Zenvia } from '../entity/zenvia';
import { ZenviaModel } from '../models/zenvia';

export interface IZenviaRepository {
  get(id: string): Promise<Zenvia>;
  list(): Promise<Zenvia[]>;
  save(model: ZenviaModel): Promise<Zenvia>;
  update(model: ZenviaModel): Promise<Zenvia>;
  delete(id: string): Promise<void>;
}
