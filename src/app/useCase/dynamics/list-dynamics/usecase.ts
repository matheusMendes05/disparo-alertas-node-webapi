import { Dynamics } from '../../../entity/dynamics';
import { IDynamicsRepository } from '../../../repository/IDynamicsRepository';

export class ListDynamicsUseCase {
  constructor(private readonly dynamicsRepo: IDynamicsRepository) {}
  async execute(): Promise<Dynamics[]> {
    const data = await this.dynamicsRepo.list();
    return data;
  }
}
