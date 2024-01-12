import { Crypto } from '../../../../helpers/crypto';
import { DynamicsRepository } from '../../../repository/implement/DynamicsRepository';
import { CreateDynamicsController } from './controller';
import { CreateDynamicsUseCase } from './usecase';

export default (): CreateDynamicsController => {
  const encrypter = new Crypto();
  const repository = new DynamicsRepository();
  const usecase = new CreateDynamicsUseCase(encrypter, repository);
  return new CreateDynamicsController(usecase);
};
