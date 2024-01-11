import getClienteController from '../app/useCase/cliente/get-cliente';
import createClienteController from '../app/useCase/cliente/create-cliente';

import { Router } from 'express';

const clienteRoutes = Router();

clienteRoutes.get('/', (request, response) => {
  return response
    .status(200)
    .json({ stausCode: 200, message: 'Listando todos os clientes' });
});

// List cliente by ID
clienteRoutes.get('/:id', (request, response) => {
  return getClienteController().handle(request, response);
});

// Add cliente
clienteRoutes.post('/create', (request, response) => {
  return createClienteController().handle(request, response);
});

export { clienteRoutes };
