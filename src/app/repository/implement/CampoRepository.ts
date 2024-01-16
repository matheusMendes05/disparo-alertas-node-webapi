import { AppDataSource } from '../../../database/data-source';
import { Campo } from '../../entity/campo';
import { Formulario } from '../../entity/formulario';
import { CampoModel } from '../../models/campo';
import { ICampoRepository } from '../ICampoRepository';

export class CampoRepository implements ICampoRepository {
  private readonly formularioRepository =
    AppDataSource.getRepository(Formulario);
  private readonly campoRepository = AppDataSource.getRepository(Campo);

  get(id: string): Promise<Campo> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<Campo[]> {
    const data = await this.campoRepository.find({
      relations: {
        valor: true,
      },
    });
    return data;
  }
  async save(model: CampoModel): Promise<Campo> {
    const formulario = await this.formularioRepository.findOneBy({
      id: model.formularioId,
    });
    if (!formulario) throw new Error('Formulario does not exist');
    const data = await this.campoRepository.save({
      nome: model.nome,
      formulario: formulario,
    });
    return data;
  }
  update(model: CampoModel): Promise<Campo> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.campoRepository.delete({ id });
  }
}
