import { HistoricoRepository } from '../../../repository/implement/HistoricoRepository';
import { ListHistoricoController } from './controller';
import { ListHistoricoUseCase } from './usecase';

export default (): ListHistoricoController => {
  const repository = new HistoricoRepository();
  const usecase = new ListHistoricoUseCase(repository);
  return new ListHistoricoController(usecase);
};
