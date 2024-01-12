import { Router } from 'express';

const dynamicsRoutes = Router();

// Add cliente
dynamicsRoutes.post('/create', (request, response) => {
  // return createClienteController().handle(request, response);
});

export { dynamicsRoutes };
