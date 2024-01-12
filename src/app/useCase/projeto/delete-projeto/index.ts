import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { DeleteProjetoController } from './controller';
import { DeleteProjetoUseCase } from './usecase';

export default (): DeleteProjetoController => {
  const repository = new ProjetoRepository();
  const usecase = new DeleteProjetoUseCase(repository);
  return new DeleteProjetoController(usecase);
};
