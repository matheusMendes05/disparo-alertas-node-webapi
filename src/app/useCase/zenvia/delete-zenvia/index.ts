import { DeleteZenviaController } from './controller';
import { DeleteZenviaUseCase } from './usecase';
import { ZenviaRepository } from '../../../repository/implement/ZenviaRepository';

export default (): DeleteZenviaController => {
  const repository = new ZenviaRepository();
  const useCase = new DeleteZenviaUseCase(repository);
  return new DeleteZenviaController(useCase);
};
