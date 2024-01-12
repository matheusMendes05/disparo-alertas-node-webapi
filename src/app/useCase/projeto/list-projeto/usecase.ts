import { Projeto } from '../../../entity/projeto';
import { IPorjetoRepository } from '../../../repository/IProjetoRepository';

export class ListProjetoUseCase {
  constructor(private readonly projetoCliente: IPorjetoRepository) {}
  async execute(): Promise<Projeto[]> {
    const data = await this.projetoCliente.list();
    return data;
  }
}
