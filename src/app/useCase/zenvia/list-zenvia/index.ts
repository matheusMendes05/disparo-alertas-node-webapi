import { ZenviaRepository } from '../../../repository/implement/ZenviaRepository';
import { ListZenviaController } from './controller';
import { ListZenviaUseCase } from './usecase';

export default (): ListZenviaController => {
  const repository = new ZenviaRepository();
  const usecase = new ListZenviaUseCase(repository);
  return new ListZenviaController(usecase);
};
