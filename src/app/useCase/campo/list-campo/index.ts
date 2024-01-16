import { CampoRepository } from '../../../repository/implement/CampoRepository';
import { ListCampoController } from './controller';
import { ListCampoUseCase } from './usecase';

export default (): ListCampoController => {
  const repository = new CampoRepository();
  const usecase = new ListCampoUseCase(repository);
  return new ListCampoController(usecase);
};
