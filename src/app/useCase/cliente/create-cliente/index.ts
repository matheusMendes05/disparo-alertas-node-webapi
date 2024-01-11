import { CreateClienteController } from './controller';
import { ClienteRepository } from '../../../repository/implement/ClienteRepository';
import { CreateClienteUseCase } from './usecase';

export default (): CreateClienteController => {
  const repository = new ClienteRepository();
  const usecase = new CreateClienteUseCase(repository);
  return new CreateClienteController(usecase);
};
