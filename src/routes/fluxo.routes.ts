import createFluxoController from '../app/useCase/fluxo/create-fluxo';

import { Router } from 'express';

const fluxoRoutes = Router();

// Add fluxo
fluxoRoutes.post('/', (request, response) => {
  return createFluxoController().handle(request, response);
});

export { fluxoRoutes };
