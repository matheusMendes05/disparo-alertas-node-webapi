import { DeleteHistoricoController } from './controller';
import { HistoricoRepository } from '../../../repository/implement/HistoricoRepository';
import { DeleteHistoricoUseCase } from './usecase';

export default (): DeleteHistoricoController => {
  const repository = new HistoricoRepository();
  const usecase = new DeleteHistoricoUseCase(repository);
  return new DeleteHistoricoController(usecase);
};
