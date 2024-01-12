import listProjetoController from '../app/useCase/projeto/list-projeto';
import getProjetoController from '../app/useCase/projeto/get-projeto';
import createProjetoController from '../app/useCase/projeto/create-projeto';
import updateProjetoController from '../app/useCase/projeto/update-projeto';
import deleteProjetoController from '../app/useCase/projeto/delete-projeto';

import { Router } from 'express';

const projetoRoutes = Router();
// List all projeto
projetoRoutes.get('/', (request, response) => {
  return listProjetoController().handle(request, response);
});

// get all projeto
projetoRoutes.get('/:id', (request, response) => {
  return getProjetoController().handle(request, response);
});

// Add projeto
projetoRoutes.post('/create', (request, response) => {
  return createProjetoController().handle(request, response);
});

// Update projeto
projetoRoutes.put('/', (request, response) => {
  return updateProjetoController().handle(request, response);
});

// Delete projeto
projetoRoutes.delete('/:id', (request, response) => {
  return deleteProjetoController().handle(request, response);
});

export { projetoRoutes };
