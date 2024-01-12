import { Projeto } from '../../entity/projeto';
import { IProjetoRepository } from '../IProjetoRepository';
import { AppDataSource } from '../../../database/data-source';
import { ProjetoModel } from '../../models/projeto';
import { Cliente } from '../../entity/cliente';

export class ProjetoRepository implements IProjetoRepository {
  private projetoRepository = AppDataSource.getRepository(Projeto);
  private clienteRepository = AppDataSource.getRepository(Cliente);

  async get(id: string): Promise<Projeto> {
    const data = await this.projetoRepository.findOneBy({ id });
    return data;
  }
  async list(): Promise<Projeto[]> {
    const data = await this.projetoRepository.find({
      relations: {
        cliente: true,
      },
    });
    return data;
  }
  async save(model: ProjetoModel): Promise<Projeto> {
    const cliente = await this.clienteRepository.findOneBy({
      id: model.clienteId,
    });
    if (!cliente) throw new Error('Cliente does not exist');
    const data = await this.projetoRepository.save({
      nome: model.nome,
      status: model.status,
      cliente: cliente,
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
