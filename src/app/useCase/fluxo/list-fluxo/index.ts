import { ListFluxoController } from './controller';
import { FluxoRepository } from '../../../repository/implement/FluxoRepository';
import { ListFluxoUseCase } from './usecase';

export default (): ListFluxoController => {
  const repository = new FluxoRepository();
  const usecase = new ListFluxoUseCase(repository);
  return new ListFluxoController(usecase);
};
