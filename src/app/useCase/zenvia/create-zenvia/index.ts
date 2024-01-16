import { Crypto } from '../../../../helpers/crypto';
import { ZenviaRepository } from '../../../repository/implement/ZenviaRepository';
import { CreateZenviaController } from './controller';
import { CreateZenviaUseCase } from './usecase';

export default (): CreateZenviaController => {
  const encrypter = new Crypto();
  const repository = new ZenviaRepository();
  const usecase = new CreateZenviaUseCase(encrypter, repository);
  return new CreateZenviaController(usecase);
};
