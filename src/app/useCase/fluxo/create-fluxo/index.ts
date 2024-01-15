import { Crypto } from '../../../../helpers/crypto';
import { FluxoRepository } from '../../../repository/implement/FluxoRepository';
import { CreateFluxoController } from './controller';
import { CreateFluxoUseCase } from './usecase';

export default (): CreateFluxoController => {
  const crypto = new Crypto();
  const repository = new FluxoRepository();
  const usecase = new CreateFluxoUseCase(crypto, repository);
  return new CreateFluxoController(usecase);
};
