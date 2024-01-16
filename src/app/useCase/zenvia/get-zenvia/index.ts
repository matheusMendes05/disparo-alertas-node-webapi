import { GetZenviaController } from './controller';
import { ZenviaRepository } from '../../../repository/implement/ZenviaRepository';
import { GetZenviaUseCase } from './usecase';

export default (): GetZenviaController => {
  const repository = new ZenviaRepository();
  const usecase = new GetZenviaUseCase(repository);
  return new GetZenviaController(usecase);
};
