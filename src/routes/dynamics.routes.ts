import listDynamicsController from '../app/useCase/dynamics/list-dynamics';
import createDynamicsController from '../app/useCase/dynamics/create-dynamics';

import { Router } from 'express';

const dynamicsRoutes = Router();

// List all cliente
dynamicsRoutes.get('/', (request, response) => {
  return listDynamicsController().handle(request, response);
});
// Add cliente
dynamicsRoutes.post('/create', (request, response) => {
  return createDynamicsController().handle(request, response);
});

export { dynamicsRoutes };
