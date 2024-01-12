import createProjetoController from '../app/useCase/projeto/create-projeto';

import { Router } from 'express';

const projetoRoutes = Router();

// Add Projeto
projetoRoutes.post('/create', (request, response) => {
  return createProjetoController().handle(request, response);
});

export { projetoRoutes };
