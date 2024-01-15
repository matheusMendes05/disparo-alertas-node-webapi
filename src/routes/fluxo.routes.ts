import listFluxoController from '../app/useCase/fluxo/list-fluxo';
import getFluxoController from '../app/useCase/fluxo/get-fluxo';
import updateFluxoController from '../app/useCase/fluxo/update-fluxo';
import createFluxoController from '../app/useCase/fluxo/create-fluxo';
import deleteFluxoController from '../app/useCase/fluxo/delete-fluxo';

import { Router } from 'express';

const fluxoRoutes = Router();

// List all fluxo
fluxoRoutes.get('/', (request, response) => {
  return listFluxoController().handle(request, response);
});

// List fluxo by id
fluxoRoutes.get('/:id', (request, response) => {
  return getFluxoController().handle(request, response);
});

// Add fluxo
fluxoRoutes.post('/create', (request, response) => {
  return createFluxoController().handle(request, response);
});

// Update fluxo
fluxoRoutes.put('/', (request, response) => {
  return updateFluxoController().handle(request, response);
});

// Delete fluxo
fluxoRoutes.delete('/:id', (request, response) => {
  return deleteFluxoController().handle(request, response);
});

export { fluxoRoutes };
