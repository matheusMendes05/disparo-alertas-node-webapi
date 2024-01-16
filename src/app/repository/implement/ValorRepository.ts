import { AppDataSource } from '../../../database/data-source';
import { Campo } from '../../entity/campo';
import { Valor } from '../../entity/valor';
import { ValorModel } from '../../models/valor';
import { IValorRepository } from '../IValorRepository';

export class ValorRepository implements IValorRepository {
  private readonly campoRepository = AppDataSource.getRepository(Campo);
  private readonly valorRepository = AppDataSource.getRepository(Valor);

  get(id: string): Promise<Valor> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<Valor[]> {
    const data = await this.valorRepository.find();
    return data;
  }
  async save(model: ValorModel): Promise<Valor> {
    const campo = await this.campoRepository.findOneBy({ id: model.campoId });
    if (!campo) throw new Error('Campo does not exist.');
    const data = await this.valorRepository.save({
      valor: model.valor,
      campo: campo,
    });
    return data;
  }
  update(model: ValorModel): Promise<Valor> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.valorRepository.delete({ id });
  }
}
