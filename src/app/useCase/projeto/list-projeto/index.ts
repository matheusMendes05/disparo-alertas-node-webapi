import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { ListProjetoController } from './controller';
import { ListProjetoUseCase } from './usecase';

export default (): ListProjetoController => {
  const repository = new ProjetoRepository();
  const usecase = new ListProjetoUseCase(repository);
  return new ListProjetoController(usecase);
};
