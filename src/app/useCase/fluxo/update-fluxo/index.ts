import { Crypto } from '../../../../helpers/crypto';
import { FluxoRepository } from '../../../repository/implement/FluxoRepository';
import { UpdateFluxoController } from './controller';
import { UpdateFluxoUseCase } from './usecase';

export default (): UpdateFluxoController => {
  const crypto = new Crypto();
  const repository = new FluxoRepository();
  const usecase = new UpdateFluxoUseCase(crypto, repository);
  return new UpdateFluxoController(usecase);
};
