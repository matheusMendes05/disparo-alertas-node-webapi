import { ListFormularioController } from './controller';
import { FormularioRepository } from '../../../repository/implement/FormularioRepository';
import { ListFormularioUseCase } from './usecase';

export default (): ListFormularioController => {
  const repository = new FormularioRepository();
  const usecase = new ListFormularioUseCase(repository);
  return new ListFormularioController(usecase);
};
