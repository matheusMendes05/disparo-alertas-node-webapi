import { IClienteRepository } from '../../../repository/IClienteRepository';

export class DeleteClienteUseCase {
  constructor(private readonly clienteRepo: IClienteRepository) {}
  async execute(params: Params): Promise<void> {
    await this.clienteRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
