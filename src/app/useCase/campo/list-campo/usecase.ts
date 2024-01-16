import { Campo } from '../../../entity/campo';
import { ICampoRepository } from '../../../repository/ICampoRepository';

export class ListCampoUseCase {
  constructor(private readonly CampoRepo: ICampoRepository) {}

  async execute(): Promise<Campo[]> {
    const data = await this.CampoRepo.list();
    return data;
  }
}
