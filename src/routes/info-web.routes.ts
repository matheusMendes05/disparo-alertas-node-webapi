import infoWebController from '../app/useCase/web/info-web';

import { Router } from 'express';

const infoWebRoutes = Router();

infoWebRoutes.post('/send', (request, response) => {
  return infoWebController().handle(request, response);
});

export { infoWebRoutes };
