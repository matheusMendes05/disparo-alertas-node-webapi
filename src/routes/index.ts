import { Router } from 'express';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';
import { appRoutes } from './app.routes';
import { clienteRoutes } from './cliente.routes';
import { projetoRoutes } from './projeto.routes';

const router = Router();

router.use('/', appRoutes);

// middleware que verifica x-api-key no cabecalho das requisicoes
router.use(apiKeyMiddleware);

// cliente
router.use('/api/cliente', clienteRoutes);
router.use('/api/projeto', projetoRoutes);

export { router };
