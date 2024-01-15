import listDynamicsController from '../app/useCase/dynamics/list-dynamics';
import getDynamicsController from '../app/useCase/dynamics/get-dynamics';
import deleteDynamicsController from '../app/useCase/dynamics/delete-dynamics';
import createDynamicsController from '../app/useCase/dynamics/create-dynamics';

import { Router } from 'express';

const dynamicsRoutes = Router();

// List all variables dynamics
dynamicsRoutes.get('/', (request, response) => {
  return listDynamicsController().handle(request, response);
});

// Lit variables dynamics by ID
dynamicsRoutes.get('/:id', (request, response) => {
  return getDynamicsController().handle(request, response);
});

// Delete variables dynamics
dynamicsRoutes.delete('/:id', (request, response) => {
  return deleteDynamicsController().handle(request, response);
});

// Add variables dynamics
dynamicsRoutes.post('/create', (request, response) => {
  return createDynamicsController().handle(request, response);
});

// Updated variables dynamics
dynamicsRoutes.put('/', (request, response) => {
  // return createDynamicsController().handle(request, response);
});

export { dynamicsRoutes };
