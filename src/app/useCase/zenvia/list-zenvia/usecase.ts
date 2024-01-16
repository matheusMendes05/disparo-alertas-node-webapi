import { Zenvia } from '../../../entity/Zenvia';
import { IZenviaRepository } from '../../../repository/IZenviaRepository';

export class ListZenviaUseCase {
  constructor(private readonly ZenviaCliente: IZenviaRepository) {}
  async execute(): Promise<Zenvia[]> {
    const data = await this.ZenviaCliente.list();
    return data;
  }
}
