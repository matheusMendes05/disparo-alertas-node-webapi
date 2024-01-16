import { Formulario } from '../../../entity/formulario';
import { IFormularioRepository } from '../../../repository/IFormularioRepository';

export class ListFormularioUseCase {
  constructor(private readonly FormularioRepo: IFormularioRepository) {}
  async execute(): Promise<Formulario[]> {
    const data = await this.FormularioRepo.list();
    return data;
  }
}
