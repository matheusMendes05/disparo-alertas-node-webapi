import { ClienteRepository } from '../../../repository/implement/ClienteRepository';
import { ListClienteController } from './controller';
import { ListClienteUseCase } from './usecase';

export default (): ListClienteController => {
  const repository = new ClienteRepository();
  const usecase = new ListClienteUseCase(repository);
  return new ListClienteController(usecase);
};
