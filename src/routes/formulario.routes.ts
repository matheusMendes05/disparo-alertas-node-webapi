import listFormularioController from '../app/useCase/formulario/list-formulario';
import createFormularioController from '../app/useCase/formulario/create-formulario';
import deleteFormularioController from '../app/useCase/formulario/delete-formulario';

import { Router } from 'express';

const formularioRoutes = Router();

// List all formulario
formularioRoutes.get('/', (request, response) => {
  return listFormularioController().handle(request, response);
});

// Add formulario
formularioRoutes.post('/create', (request, response) => {
  return createFormularioController().handle(request, response);
});

// Delete formulario
formularioRoutes.delete('/:id', (request, response) => {
  return deleteFormularioController().handle(request, response);
});

export { formularioRoutes };
