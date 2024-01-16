import { Projeto } from '../../entity/projeto';
import { IProjetoRepository } from '../IProjetoRepository';
import { AppDataSource } from '../../../database/data-source';
import { ProjetoModel } from '../../models/projeto';
import { Cliente } from '../../entity/cliente';
import { Dynamics } from '../../entity/dynamics';

export class ProjetoRepository implements IProjetoRepository {
  private projetoRepository = AppDataSource.getRepository(Projeto);
  private clienteRepository = AppDataSource.getRepository(Cliente);
  private dynamicsRpository = AppDataSource.getRepository(Dynamics);

  async get(id: string): Promise<Projeto> {
    const data = await this.projetoRepository.findOneBy({ id });
    return data;
  }
  async list(): Promise<Projeto[]> {
    const data = await this.projetoRepository.find({
      relations: {
        cliente: true,
        dynamics: true,
        fluxo: true,
        historico: true,
      },
    });
    return data;
  }
  async save(model: ProjetoModel): Promise<Projeto> {
    const cliente = await this.clienteRepository.findOneBy({
      id: model.clienteId,
    });
    const dynamics = await this.dynamicsRpository.findOneBy({
      id: model.dynamicsId,
    });

    if (!cliente) throw new Error('Cliente does not exist');
    if (!dynamics) throw new Error('Dynamics does not exist');

    const data = await this.projetoRepository.save({
      nome: model.nome,
      status: model.status,
      cliente: cliente,
      dynamics: dynamics,
    });
    return data;
  }
  async update(model: ProjetoModel): Promise<Projeto> {
    await this.projetoRepository.update(model.id, {
      nome: model.nome,
      status: model.status,
    });
    const data = await this.projetoRepository.findOneBy({ id: model.id });
    return data;
  }
  async delete(id: string): Promise<void> {
    await this.projetoRepository.delete(id);
  }
}
