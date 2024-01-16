import { Valor } from '../../../entity/Valor';
import { IValorRepository } from '../../../repository/IValorRepository';

export class ListValorUseCase {
  constructor(private readonly ValorCliente: IValorRepository) {}
  async execute(): Promise<Valor[]> {
    const data = await this.ValorCliente.list();
    return data;
  }
}
