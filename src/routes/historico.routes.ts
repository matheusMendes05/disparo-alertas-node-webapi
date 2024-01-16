import createHistoricoController from '../app/useCase/historico/create-historico';

import { Router } from 'express';

const historicoRoutes = Router();

// Create historico
historicoRoutes.post('/create', (request, response) => {
  return createHistoricoController().handle(request, response);
});

export { historicoRoutes };
