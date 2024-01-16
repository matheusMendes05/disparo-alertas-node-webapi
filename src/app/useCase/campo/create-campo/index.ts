import { CampoRepository } from '../../../repository/implement/CampoRepository';
import { CreateCampoController } from './controller';
import { CreateCampoUseCase } from './usecase';

export default (): CreateCampoController => {
  const repository = new CampoRepository();
  const usecase = new CreateCampoUseCase(repository);
  return new CreateCampoController(usecase);
};
