import { Cliente } from '../entity/cliente';
import { ClienteModel } from '../models/cliente';

export interface IClienteRepository {
  save(cliente: ClienteModel): Promise<Cliente>;
  get(id: string): Promise<Cliente>;
  list(): Promise<Cliente[]>;
  delete(id: string): Promise<void>;
  update(cliente: ClienteModel): Promise<Cliente>;
}
