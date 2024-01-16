import { ICampoRepository } from '../../../repository/ICampoRepository';

export class DeleteCampoUseCase {
  constructor(private readonly CampoRepo: ICampoRepository) {}
  async execute(params: Params): Promise<void> {
    await this.CampoRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
