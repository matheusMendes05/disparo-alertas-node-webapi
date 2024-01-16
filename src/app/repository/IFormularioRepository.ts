import { Formulario } from '../entity/formulario';
import { FormularioModel } from '../models/formulario';

export interface IFormularioRepository {
  get(id: string): Promise<Formulario>;
  list(): Promise<Formulario[]>;
  save(model: FormularioModel): Promise<Formulario>;
  update(model: FormularioModel): Promise<Formulario>;
  delete(id: string): Promise<void>;
}
