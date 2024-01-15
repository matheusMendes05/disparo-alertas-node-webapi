import { AppDataSource } from '../../../database/data-source';
import { Fluxo } from '../../entity/fluxo';
import { Projeto } from '../../entity/projeto';
import { FluxoModel } from '../../models/fluxo';
import { IFluxoRepository } from '../IFluxoRepository';

export class FluxoRepository implements IFluxoRepository {
  private readonly projetorepository = AppDataSource.getRepository(Projeto);
  private readonly fluxoReposotory = AppDataSource.getRepository(Fluxo);

  get(id: string): Promise<Fluxo> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Fluxo[]> {
    throw new Error('Method not implemented.');
  }
  async save(model: FluxoModel): Promise<Fluxo> {
    const projeto = await this.projetorepository.findOneBy({
      id: model.projetoId,
    });
    if (!projeto) throw new Error('Projeto does not exist');

    const data = await this.fluxoReposotory.save({
      nome: model.nome,
      status: model.status,
      flowId: model.flowId,
      projeto: projeto,
    });
    return data;
  }
  update(model: FluxoModel): Promise<Fluxo> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
