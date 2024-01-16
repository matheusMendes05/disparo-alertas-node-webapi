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
  async listProjectbyClient(params: IProjetoRepository.Params): Promise<any> {
    const data = await this.clienteRepository.createQueryBuilder(`
    SELECT
    c.id as cliente_id,
    c.nome as cliente_nome,
    c.status as cliente_status,
    p.id as projeto_id,
    p.nome as projeto_nome,
    p.status as projeto_status,
    d.id as dynamics_id,
    d.urlBase as dynamics_url_base,
    d.urlContacts dynamics_url_contacts,
    d.clientId as dynamics_client_id,
    d.clienteSecret as dynamics_client_secret,
    d.scope as dynamics_scope,
    d.resource as dynamics_resource,
    d.sql as dynamics_sql,
    f.nome as fluxo_nome,
    f.status as fluxo_status,
    z.urlBase as zenvia_url_base,
    z.xApiToken as zenvia_x_api_token,
    fo.titulo as formulario_titulo,
    ca.nome as campo_nome,
    v.valor as valor_valor

    FROM cliente c
    INNER JOIN projeto p
    ON c.id = p.clienteId
    INNER JOIN dynamics d
    ON d.id = p.dynamicsId
    INNER JOIN fluxo f
    ON p.id = f.projetoId
    INNER JOIN zenvia z
    ON f.zenviaId = z.id
    INNER JOIN formulario fo
    ON p.id = fo.projetoId
    INNER JOIN campo ca
    ON fo.id = ca.formularioId
    INNER JOIN valor v
    ON ca.id = v.campoId
    WHERE c.id = '${params.clienteId}'
    `);
    return JSON.stringify(data);
  }
}
