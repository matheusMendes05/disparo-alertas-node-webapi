import { HistoricoRepository } from '../../../repository/implement/HistoricoRepository';
import { CreateHistoricoController } from './controller';
import { CreateHistoricoUseCase } from './usecase';

export default (): CreateHistoricoController => {
  const repository = new HistoricoRepository();
  const usecase = new CreateHistoricoUseCase(repository);
  return new CreateHistoricoController(usecase);
};
