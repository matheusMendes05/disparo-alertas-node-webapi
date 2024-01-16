import listHistoricoController from '../app/useCase/historico/list-historico';
import createHistoricoController from '../app/useCase/historico/create-historico';
import deleteHistoricoController from '../app/useCase/historico/delete-historico';

import { Router } from 'express';

const historicoRoutes = Router();

// List all historico
historicoRoutes.get('/', (request, response) => {
  return listHistoricoController().handle(request, response);
});

// Create historico
historicoRoutes.post('/create', (request, response) => {
  return createHistoricoController().handle(request, response);
});

// Delete historico
historicoRoutes.delete('/:id', (request, response) => {
  return deleteHistoricoController().handle(request, response);
});

export { historicoRoutes };
