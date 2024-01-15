import { DeleteDynamicsController } from './controller';
import { DeleteDynamicsUseCase } from './usecase';
import { DynamicsRepository } from '../../../repository/implement/DynamicsRepository';

export default (): DeleteDynamicsController => {
  const repository = new DynamicsRepository();
  const useCase = new DeleteDynamicsUseCase(repository);
  return new DeleteDynamicsController(useCase);
};
