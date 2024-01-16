import { IZenviaRepository } from '../../../repository/IZenviaRepository';

export class DeleteZenviaUseCase {
  constructor(private readonly ZenviaRepo: IZenviaRepository) {}
  async execute(params: Params): Promise<void> {
    await this.ZenviaRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
