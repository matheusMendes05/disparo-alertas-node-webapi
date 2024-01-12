import { Projeto } from '../../entity/projeto';
import { IPorjetoRepository } from '../IProjetoRepository';
import { AppDataSource } from '../../../database/data-source';
import { ProjetoModel } from '../../models/projeto';

export class ProjetoRepository implements IPorjetoRepository {
  private projeto = AppDataSource.getRepository(Projeto);

  async save(projeto: ProjetoModel): Promise<Projeto> {
    const data = await this.projeto.save(projeto);
    return data;
  }
}
