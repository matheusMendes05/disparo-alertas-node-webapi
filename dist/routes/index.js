"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var apiKeyMiddleware_1 = require("../middleware/apiKeyMiddleware");
var app_routes_1 = require("./app.routes");
var campanha_routes_1 = require("./campanha.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use('/', app_routes_1.appRoutes);
// middleware que verifica x-api-key no cabecalho das requisicoes
router.use(apiKeyMiddleware_1.apiKeyMiddleware);
router.use('/api', campanha_routes_1.campanhaRouter);
