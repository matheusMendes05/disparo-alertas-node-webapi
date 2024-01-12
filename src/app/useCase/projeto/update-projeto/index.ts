import { UpdateProjetoController } from './controller';
import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { UpdateProjetoUseCase } from './usecase';

export default (): UpdateProjetoController => {
  const repository = new ProjetoRepository();
  const usecase = new UpdateProjetoUseCase(repository);
  return new UpdateProjetoController(usecase);
};
