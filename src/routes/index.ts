import { Router } from 'express';
import { apiKeyMiddleware } from '../middleware/apiKeyMiddleware';
import { appRoutes } from './app.routes';
import { clienteRoutes } from './cliente.routes';
import { projetoRoutes } from './projeto.routes';
import { dynamicsRoutes } from './dynamics.routes';
import { fluxoRoutes } from './fluxo.routes';
import { zenviaRoutes } from './zenvia.routes';
import { historicoRoutes } from './historico.routes';
import { formularioRoutes } from './formulario.routes';
import { campoRoutes } from './campo.routes';
import { valorRoutes } from './valor.routes';
import { infoWebRoutes } from './info-web.routes';

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
// formulario
router.use('/api/formulario', formularioRoutes);
// campo
router.use('/api/campo', campoRoutes);
// valor
router.use('/api/valor', valorRoutes);
// web
router.use('/api/info-web', infoWebRoutes);

export { router };
