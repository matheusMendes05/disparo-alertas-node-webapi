import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';
import { Dynamics } from '../../../entity/dynamics';

export class GetDynamicsUseCase {
  constructor(private readonly dynamicsRepo: IDynamicsRepository) {}
  async execute(params: Params): Promise<Dynamics> {
    const data = await this.dynamicsRepo.get(params.id);
    return data;
  }
}

type Params = {
  id: string;
};
