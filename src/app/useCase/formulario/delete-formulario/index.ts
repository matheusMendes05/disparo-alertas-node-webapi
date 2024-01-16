import { DeleteFormularioController } from './controller';
import { FormularioRepository } from '../../../repository/implement/FormularioRepository';
import { DeleteFormularioUseCase } from './usecase';

export default (): DeleteFormularioController => {
  const repository = new FormularioRepository();
  const usecase = new DeleteFormularioUseCase(repository);
  return new DeleteFormularioController(usecase);
};
