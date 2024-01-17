import { AlertRepository } from '../../../repository/implement/AlertRepository';
import { ZenviaService } from '../../../service/implement/ZenviaService';
import { InfoWebController } from './controller';
import { InfoWebUseCase } from './usecase';

export default (): InfoWebController => {
  const service = new ZenviaService();
  const repository = new AlertRepository();
  const usecase = new InfoWebUseCase(repository);
  return new InfoWebController(usecase);
};
