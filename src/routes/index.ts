import { Router } from 'express';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';
import { appRoutes } from './app.routes';
import { clienteRoutes } from './cliente.routes';

const router = Router();

router.use('/', appRoutes);

// middleware que verifica x-api-key no cabecalho das requisicoes
router.use(apiKeyMiddleware);

// cliente
router.use('/api/cliente', clienteRoutes);
export { router };
