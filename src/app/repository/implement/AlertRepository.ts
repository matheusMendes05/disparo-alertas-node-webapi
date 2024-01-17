import { IAlertaRepository, IProjetoRepository } from '../IAlertaRepository';
import { Cliente } from '../../entity/cliente';

import { AppDataSource } from '../../../database/data-source';

export class AlertRepository implements IAlertaRepository {
  private clienteRepository = AppDataSource.getRepository(Cliente);

  async getInfo(params: IProjetoRepository.Params): Promise<any> {
    const data = await this.clienteRepository
      .createQueryBuilder('cliente')
      .innerJoinAndSelect('cliente.projeto', 'projeto')
      .innerJoinAndSelect('projeto.dynamics', 'dynamics')
      .innerJoinAndSelect('projeto.fluxo', 'fluxo')
      .innerJoinAndSelect('fluxo.zenvia', 'zenvia')
      .innerJoinAndSelect('projeto.formulario', 'formulario')
      .innerJoinAndSelect('formulario.campo', 'campo')
      .innerJoinAndSelect('campo.valor', 'valor')
      .innerJoinAndSelect('projeto.historico', 'historico')
      .where('cliente.id = :id', { id: params.clienteId })
      .where('projeto.id = :id', { id: params.projetoId })
      .getMany();
    return data;
  }
}
