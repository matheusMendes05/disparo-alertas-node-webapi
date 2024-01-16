import { ValorRepository } from '../../../repository/implement/ValorRepository';
import { ListValorController } from './controller';
import { ListValorUseCase } from './usecase';

export default (): ListValorController => {
  const repository = new ValorRepository();
  const usecase = new ListValorUseCase(repository);
  return new ListValorController(usecase);
};
