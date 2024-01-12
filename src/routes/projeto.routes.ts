import listProjetoController from '../app/useCase/projeto/list-projeto';
import createProjetoController from '../app/useCase/projeto/create-projeto';
import deleteProjetoController from '../app/useCase/projeto/delete-projeto';

import { Router } from 'express';

const projetoRoutes = Router();
// List Projeto
projetoRoutes.get('/', (request, response) => {
  return listProjetoController().handle(request, response);
});

// Add Projeto
projetoRoutes.post('/create', (request, response) => {
  return createProjetoController().handle(request, response);
});

// Delete Projeto
projetoRoutes.delete('/:id', (request, response) => {
  return deleteProjetoController().handle(request, response);
});

export { projetoRoutes };
