import { ValorRepository } from '../../../repository/implement/ValorRepository';
import { DeleteValorController } from './controller';
import { DeleteValorUseCase } from './usecase';

export default (): DeleteValorController => {
  const repository = new ValorRepository();
  const usecase = new DeleteValorUseCase(repository);
  return new DeleteValorController(usecase);
};
