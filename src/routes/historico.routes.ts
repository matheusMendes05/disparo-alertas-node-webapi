import createHistoricoController from '../app/useCase/historico/create-historico';
import deleteHistoricoController from '../app/useCase/historico/delete-historico';

import { Router } from 'express';

const historicoRoutes = Router();

// Create historico
historicoRoutes.post('/create', (request, response) => {
  return createHistoricoController().handle(request, response);
});

// Delete historico
historicoRoutes.delete('/:id', (request, response) => {
  return deleteHistoricoController().handle(request, response);
});

export { historicoRoutes };
