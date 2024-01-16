import { Router } from 'express';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';
import { appRoutes } from './app.routes';
import { clienteRoutes } from './cliente.routes';
import { projetoRoutes } from './projeto.routes';
import { dynamicsRoutes } from './dynamics.routes';
import { fluxoRoutes } from './fluxo.routes';
import { zenviaRoutes } from './zenvia.routes';
import { historicoRoutes } from './historico.routes';

const router = Router();

router.use('/', appRoutes);
// middleware que verifica x-api-key no cabecalho das requisicoes
router.use(apiKeyMiddleware);
// cliente
router.use('/api/cliente', clienteRoutes);
// projeto
router.use('/api/projeto', projetoRoutes);
// dynamics
router.use('/api/dynamics', dynamicsRoutes);
// fluxo
router.use('/api/fluxo', fluxoRoutes);
// zenvia
router.use('/api/zenvia', zenviaRoutes);
// historico
router.use('/api/historico', historicoRoutes);

export { router };
