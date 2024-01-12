import { AppDataSource } from '../../../database/data-source';
import { Dynamics } from '../../entity/dynamics';
import { Projeto } from '../../entity/projeto';
import { DynamicsModel } from '../../models/dynamics';
import { IDynamicsRepository } from '../IDynamicsRepository';

export class DynamicsRepository implements IDynamicsRepository {
  private projetoRepository = AppDataSource.getRepository(Projeto);
  private dynamicsRepository = AppDataSource.getRepository(Dynamics);

  get(id: string): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Dynamics[]> {
    throw new Error('Method not implemented.');
  }
  async save(model: DynamicsModel): Promise<Dynamics> {
    const projeto = await this.projetoRepository.findOneBy({
      id: model.projetoId,
    });
    if (!projeto) throw new Error('Projeto does not exist');
    const projetoData = Object.assign({}, model, { projeto: projeto });
    const data = await this.dynamicsRepository.save(
      projetoData as DynamicsModel,
    );
    return data;
  }
  update(model: DynamicsModel): Promise<Dynamics> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
