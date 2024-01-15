import { AppDataSource } from '../../../database/data-source';
import { Fluxo } from '../../entity/fluxo';
import { Projeto } from '../../entity/projeto';
import { FluxoModel } from '../../models/fluxo';
import { IFluxoRepository } from '../IFluxoRepository';

export class FluxoRepository implements IFluxoRepository {
  private readonly projetorepository = AppDataSource.getRepository(Projeto);
  private readonly fluxoRepository = AppDataSource.getRepository(Fluxo);

  async get(id: string): Promise<Fluxo> {
    const data = await this.fluxoRepository.findOneBy({ id });
    return data;
  }
  async list(): Promise<Fluxo[]> {
    const data = await this.fluxoRepository.find({
      relations: {
        projeto: true,
      },
    });
    return data;
  }
  async save(model: FluxoModel): Promise<Fluxo> {
    const projeto = await this.projetorepository.findOneBy({
      id: model.projetoId,
    });
    if (!projeto) throw new Error('Projeto does not exist');

    const data = await this.fluxoRepository.save({
      nome: model.nome,
      status: model.status,
      flowId: model.flowId,
      projeto: projeto,
    });
    return data;
  }
  async update(model: FluxoModel): Promise<Fluxo> {
    await this.fluxoRepository.update(model.id, {
      nome: model.nome,
      status: model.status,
      flowId: model.flowId,
    });

    const data = await this.fluxoRepository.findOneBy({ id: model.id });
    return data;
  }
  async delete(id: string): Promise<void> {
    await this.fluxoRepository.delete({ id });
  }
}
