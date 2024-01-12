import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { CreateProjetoController } from './controller';
import { CreateProjetoUseCase } from './usecase';

export default (): CreateProjetoController => {
  const repository = new ProjetoRepository();
  const usecase = new CreateProjetoUseCase(repository);
  return new CreateProjetoController(usecase);
};
