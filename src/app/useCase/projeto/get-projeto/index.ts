import { GetProjetoController } from './controller';
import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { GetProjetoUseCase } from './usecase';

export default (): GetProjetoController => {
  const repository = new ProjetoRepository();
  const usecase = new GetProjetoUseCase(repository);
  return new GetProjetoController(usecase);
};
