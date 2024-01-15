import { GetFluxoController } from './controller';
import { FluxoRepository } from '../../../repository/implement/FluxoRepository';
import { GetFluxoUseCase } from './usecase';

export default (): GetFluxoController => {
  const repository = new FluxoRepository();
  const usecase = new GetFluxoUseCase(repository);
  return new GetFluxoController(usecase);
};
