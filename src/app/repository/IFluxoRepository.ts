import { Fluxo } from '../entity/fluxo';
import { FluxoModel } from '../models/fluxo';

export interface IFluxoRepository {
  get(id: string): Promise<Fluxo>;
  list(): Promise<Fluxo[]>;
  save(model: FluxoModel): Promise<Fluxo>;
  update(model: FluxoModel): Promise<Fluxo>;
  delete(id: string): Promise<void>;
}
