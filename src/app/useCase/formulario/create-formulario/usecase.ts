import { IFormularioRepository } from '../../../repository/IFormularioRepository';
import { Formulario } from '../../../entity/formulario';
import { FormularioModel } from '../../../models/formulario';

export class CreateFormularioUseCase {
  constructor(private readonly formularioRepo: IFormularioRepository) {}
  async execute(params: Params): Promise<Formulario> {
    const formulario = new FormularioModel({
      titulo: params.titulo,
      projetoId: params.projetoId,
    });
    const data = await this.formularioRepo.save(formulario);
    return data;
  }
}

type Params = {
  titulo: string;
  projetoId: string;
};
