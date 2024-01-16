import { AppDataSource } from '../../../database/data-source';
import { Zenvia } from '../../entity/zenvia';
import { ZenviaModel } from '../../models/zenvia';
import { IZenviaRepository } from '../IZenviaRepository';

export class ZenviaRepository implements IZenviaRepository {
  private readonly zenviaRepository = AppDataSource.getRepository(Zenvia);

  async get(id: string): Promise<Zenvia> {
    const data = await this.zenviaRepository.findOneBy({ id });
    return data;
  }
  async list(): Promise<Zenvia[]> {
    const data = await this.zenviaRepository.find({
      relations: {
        fluxo: true,
      },
    });
    return data;
  }
  async save(model: ZenviaModel): Promise<Zenvia> {
    const data = await this.zenviaRepository.save({
      urlBase: model.urlBase,
      xApiToken: model.xApiToken,
    });
    return data;
  }
  update(model: ZenviaModel): Promise<Zenvia> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    await this.zenviaRepository.delete({ id });
  }
}
