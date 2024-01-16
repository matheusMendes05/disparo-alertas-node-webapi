import { IZenviaRepository } from '../../../repository/IZenviaRepository';
import { Zenvia } from '../../../entity/zenvia';

export class GetZenviaUseCase {
  constructor(private readonly ZenviaRepo: IZenviaRepository) {}
  async execute(params: Params): Promise<Zenvia> {
    const data = await this.ZenviaRepo.get(params.id);
    return data;
  }
}

type Params = {
  id: string;
};
