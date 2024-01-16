import { CreateFormularioController } from './controller';
import { FormularioRepository } from '../../../repository/implement/FormularioRepository';
import { CreateFormularioUseCase } from './usecase';

export default (): CreateFormularioController => {
  const repository = new FormularioRepository();
  const usecase = new CreateFormularioUseCase(repository);
  return new CreateFormularioController(usecase);
};
