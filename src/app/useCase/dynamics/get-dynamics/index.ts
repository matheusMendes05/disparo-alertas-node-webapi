import { GetDynamicsController } from './controller';
import { DynamicsRepository } from '../../../repository/implement/DynamicsRepository';
import { GetDynamicsUseCase } from './usecase';

export default (): GetDynamicsController => {
  const repository = new DynamicsRepository();
  const usecase = new GetDynamicsUseCase(repository);
  return new GetDynamicsController(usecase);
};
