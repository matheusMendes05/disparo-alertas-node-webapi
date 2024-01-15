import { Fluxo } from '../../entity/fluxo';
import { FluxoModel } from '../../models/fluxo';
import { IFluxoRepository } from '../IFluxoRepository';

export class FluxoRepository implements IFluxoRepository {
  get(id: string): Promise<Fluxo> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Fluxo[]> {
    throw new Error('Method not implemented.');
  }
  save(model: FluxoModel): Promise<Fluxo> {
    throw new Error('Method not implemented.');
  }
  update(model: FluxoModel): Promise<Fluxo> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
