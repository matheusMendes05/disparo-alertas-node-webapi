import listCampoController from '../app/useCase/campo/list-campo';
import createCampoController from '../app/useCase/campo/create-campo';
import deleteCampoController from '../app/useCase/campo/delete-campo';

import { Router } from 'express';

const campoRoutes = Router();

// List all campo
campoRoutes.get('/', (request, response) => {
  return listCampoController().handle(request, response);
});

// Add campo
campoRoutes.post('/create', (request, response) => {
  return createCampoController().handle(request, response);
});

// Delete campo
campoRoutes.delete('/:id', (request, response) => {
  return deleteCampoController().handle(request, response);
});

export { campoRoutes };
