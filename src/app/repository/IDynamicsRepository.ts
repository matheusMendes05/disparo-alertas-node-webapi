import { Dynamics } from '../entity/dynamics';
import { DynamicsModel } from '../models/dynamics';

export interface IDynamicsRepository {
  get(id: string): Promise<Dynamics>;
  list(): Promise<Dynamics[]>;
  save(model: DynamicsModel): Promise<Dynamics>;
  update(model: DynamicsModel): Promise<Dynamics>;
  delete(id: string): Promise<void>;
}
