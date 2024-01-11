import { ClienteRepository } from '../../../repository/implement/ClienteRepository';
import { GetClienteController } from './controller';
import { GetClienteUseCase } from './usecase';

export default (): GetClienteController => {
  const repository = new ClienteRepository();
  const usecase = new GetClienteUseCase(repository);
  return new GetClienteController(usecase);
};
