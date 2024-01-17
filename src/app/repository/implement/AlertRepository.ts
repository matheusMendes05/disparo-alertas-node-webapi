import { IAlertaRepository } from '../IAlertaRepository';
import { Cliente } from '../../entity/cliente';

import { AppDataSource } from '../../../database/data-source';
import { Projeto } from '../../entity/projeto';

export class AlertRepository implements IAlertaRepository {
  private readonly clienteRepository = AppDataSource.getRepository(Cliente);
  private readonly projetoRepository = AppDataSource.getRepository(Projeto);

  async getInfo(
    params: IAlertaRepository.Params,
  ): Promise<IAlertaRepository.Result> {
    const cliente = await this.clienteRepository.findOneBy({
      id: params.clienteId,
    });
    if (!cliente) throw new Error('Cliente does not exist');

    const projeto = await this.projetoRepository.findOneBy({
      id: params.projetoId,
    });
    if (!projeto) throw new Error('Projeto does not exist');

    const data = await this.clienteRepository
      .createQueryBuilder('cliente')
      .innerJoinAndSelect('cliente.projeto', 'projeto')
      .innerJoinAndSelect('projeto.dynamics', 'dynamics')
      .innerJoinAndSelect('projeto.fluxo', 'fluxo')
      .innerJoinAndSelect('fluxo.zenvia', 'zenvia')
      .innerJoinAndSelect('projeto.formulario', 'formulario')
      .innerJoinAndSelect('formulario.campo', 'campo')
      .innerJoinAndSelect('campo.valor', 'valor')
      .where('cliente.id = :id', { id: params.clienteId })
      .orWhere('projeto.id = :id', { id: params.projetoId })
      .getMany();
    return data;
  }
}
