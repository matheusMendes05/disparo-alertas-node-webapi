import listZenviaController from '../app/useCase/zenvia/list-zenvia';
import getZenviaController from '../app/useCase/zenvia/get-zenvia';
import createZenviaController from '../app/useCase/zenvia/create-zenvia';
import deleteZenviaController from '../app/useCase/zenvia/delete-zenvia';

import { Router } from 'express';

const zenviaRoutes = Router();

// List all variables zenvia
zenviaRoutes.get('/', (request, response) => {
  return listZenviaController().handle(request, response);
});

// List variables zenvia by ID
zenviaRoutes.get('/:id', (request, response) => {
  return getZenviaController().handle(request, response);
});

// Create variables zenvia
zenviaRoutes.post('/create', (request, response) => {
  return createZenviaController().handle(request, response);
});

// Delete variables zenvia
zenviaRoutes.delete('/:id', (request, response) => {
  return deleteZenviaController().handle(request, response);
});

export { zenviaRoutes };
