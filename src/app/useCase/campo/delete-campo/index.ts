import { ClienteRepository } from '../../../repository/implement/ClienteRepository';
import { DeleteClienteController } from './controller';
import { DeleteClienteUseCase } from './usecase';

export default (): DeleteClienteController => {
  const repository = new ClienteRepository();
  const useCase = new DeleteClienteUseCase(repository);
  return new DeleteClienteController(useCase);
};
