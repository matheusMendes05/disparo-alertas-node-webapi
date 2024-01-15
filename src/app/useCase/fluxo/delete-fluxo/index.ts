import { DeleteFluxoController } from './controller';
import { FluxoRepository } from '../../../repository/implement/FluxoRepository';
import { DeleteFluxoUseCase } from './usecase';

export default (): DeleteFluxoController => {
  const repository = new FluxoRepository();
  const usecase = new DeleteFluxoUseCase(repository);
  return new DeleteFluxoController(usecase);
};
