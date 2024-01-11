import { ClienteRepository } from '../../../repository/implement/ClienteRepository';
import { UpdateClienteController } from './controller';
import { UpdateClienteUseCase } from './usecase';

export default (): UpdateClienteController => {
  const repository = new ClienteRepository();
  const usecase = new UpdateClienteUseCase(repository);
  return new UpdateClienteController(usecase);
};
