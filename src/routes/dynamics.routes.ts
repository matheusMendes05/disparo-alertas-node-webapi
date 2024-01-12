import createDynamicsController from '../app/useCase/dynamics/create-dynamics';

import { Router } from 'express';

const dynamicsRoutes = Router();

// Add cliente
dynamicsRoutes.post('/create', (request, response) => {
  return createDynamicsController().handle(request, response);
});

export { dynamicsRoutes };
