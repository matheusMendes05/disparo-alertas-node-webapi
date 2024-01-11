import listClienteController from '../app/useCase/cliente/list-cliente';
import getClienteController from '../app/useCase/cliente/get-cliente';
import createClienteController from '../app/useCase/cliente/create-cliente';
import deleteClienteController from '../app/useCase/cliente/delete-cliente';
import updateClienteController from '../app/useCase/cliente/update-cliente';

import { Router } from 'express';

const clienteRoutes = Router();

// List all clientes
clienteRoutes.get('/', (request, response) => {
  return listClienteController().handle(request, response);
});

// List cliente by ID
clienteRoutes.get('/:id', (request, response) => {
  return getClienteController().handle(request, response);
});

// Add cliente
clienteRoutes.post('/create', (request, response) => {
  return createClienteController().handle(request, response);
});

// Delete cliente
clienteRoutes.delete('/:id', (request, response) => {
  return deleteClienteController().handle(request, response);
});

// Update cliente
clienteRoutes.put('/', (request, response) => {
  return updateClienteController().handle(request, response);
});

export { clienteRoutes };
