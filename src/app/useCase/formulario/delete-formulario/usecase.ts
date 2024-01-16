import { IFormularioRepository } from '../../../repository/IFormularioRepository';

export class DeleteFormularioUseCase {
  constructor(private readonly FormularioRepo: IFormularioRepository) {}
  async execute(params: Params): Promise<void> {
    await this.FormularioRepo.delete(params.id);
  }
}

type Params = {
  id: string;
};
