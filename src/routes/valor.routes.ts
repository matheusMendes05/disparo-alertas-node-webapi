import listValorController from '../app/useCase/valor/list-valor';
import createValorController from '../app/useCase/valor/create-valor';
import deleteValorController from '../app/useCase/valor/delete-valor';

import { Router } from 'express';

const valorRoutes = Router();

// Add valor
valorRoutes.get('/', (request, response) => {
  return listValorController().handle(request, response);
});

// Add valor
valorRoutes.post('/create', (request, response) => {
  return createValorController().handle(request, response);
});

// Delete valor
valorRoutes.delete('/:id', (request, response) => {
  return deleteValorController().handle(request, response);
});

export { valorRoutes };
