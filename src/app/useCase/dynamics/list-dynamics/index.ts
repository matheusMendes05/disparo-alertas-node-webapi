import { ListDynamicsController } from './controller';
import { DynamicsRepository } from '../../../repository/implement/DynamicsRepository';
import { ListDynamicsUseCase } from './usecase';

export default (): ListDynamicsController => {
  const repository = new DynamicsRepository();
  const usecase = new ListDynamicsUseCase(repository);
  return new ListDynamicsController(usecase);
};
