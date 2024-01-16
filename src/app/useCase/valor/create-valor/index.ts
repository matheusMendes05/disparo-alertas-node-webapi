import { CreateValorController } from './controller';
import { ValorRepository } from '../../../repository/implement/ValorRepository';
import { CreateValorUseCase } from './usecase';

export default (): CreateValorController => {
  const repository = new ValorRepository();
  const usecase = new CreateValorUseCase(repository);
  return new CreateValorController(usecase);
};
