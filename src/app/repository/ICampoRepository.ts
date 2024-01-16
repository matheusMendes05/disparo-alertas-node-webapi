import { Campo } from '../entity/campo';
import { CampoModel } from '../models/campo';

export interface ICampoRepository {
  get(id: string): Promise<Campo>;
  list(): Promise<Campo[]>;
  save(model: CampoModel): Promise<Campo>;
  update(model: CampoModel): Promise<Campo>;
  delete(id: string): Promise<void>;
}
