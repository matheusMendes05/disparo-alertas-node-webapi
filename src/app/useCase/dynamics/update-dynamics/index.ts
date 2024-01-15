import { UpdateDynamicsController } from './controller';
import { DynamicsRepository } from '../../../repository/implement/DynamicsRepository';
import { UpdateDynamicsUseCase } from './usecase';
import { Crypto } from '../../../../helpers/crypto';

export default (): UpdateDynamicsController => {
  const encrypter = new Crypto();
  const repository = new DynamicsRepository();
  const usecase = new UpdateDynamicsUseCase(encrypter, repository);
  return new UpdateDynamicsController(usecase);
};
