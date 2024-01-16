import { AppDataSource } from '../../../database/data-source';
import { Formulario } from '../../entity/formulario';
import { Projeto } from '../../entity/projeto';
import { FormularioModel } from '../../models/formulario';
import { IFormularioRepository } from '../IFormularioRepository';

export class FormularioRepository implements IFormularioRepository {
  private readonly projetoRepository = AppDataSource.getRepository(Projeto);
  private readonly formularioRepository =
    AppDataSource.getRepository(Formulario);

  get(id: string): Promise<Formulario> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<Formulario[]> {
    const data = await this.formularioRepository.find({
      relations: {
        projeto: true,
      },
    });
    return data;
  }
  async save(model: FormularioModel): Promise<Formulario> {
    const projeto = await this.projetoRepository.findOneBy({
      id: model.projetoId,
    });
    if (!projeto) throw new Error('Projeto does not exist');
    const data = await this.formularioRepository.save({
      titulo: model.titulo,
      projeto: projeto,
    });
    return data;
  }
  update(model: FormularioModel): Promise<Formulario> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.formularioRepository.delete({ id });
  }
}
