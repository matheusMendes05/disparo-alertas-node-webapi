import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';

export class DeleteDynamicsUseCase {
  constructor(private readonly dynamicsRepo: IDynamicsRepository) {}

  async execute(params: Params): Promise<void> {
    await this.dynamicsRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
