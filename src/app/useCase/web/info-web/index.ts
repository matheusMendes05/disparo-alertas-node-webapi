import { ProjetoRepository } from '../../../repository/implement/ProjetoRepository';
import { ZenviaService } from '../../../service/implement/ZenviaService';
import { InfoWebController } from './controller';
import { InfoWebUseCase } from './usecase';

export default (): InfoWebController => {
  const service = new ZenviaService();
  const repository = new ProjetoRepository();
  const usecase = new InfoWebUseCase(repository);
  return new InfoWebController(usecase);
};
