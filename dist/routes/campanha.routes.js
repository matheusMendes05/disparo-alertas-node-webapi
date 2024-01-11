"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campanhaRouter = void 0;
var express_1 = require("express");
var listPromocoesCampanha_1 = __importDefault(require("../app/useCase/campanha/listPromocoesCampanha"));
var getPromocaoCampanha_1 = __importDefault(require("../app/useCase/campanha/getPromocaoCampanha"));
var getPromocaoByID_1 = __importDefault(require("../app/useCase/campanha/getPromocaoByID"));
var getPromocaoCampanhaText_1 = __importDefault(require("../app/useCase/campanha/getPromocaoCampanhaText"));
var getPromocaoCampanhaSlug_1 = __importDefault(require("../app/useCase/campanha/getPromocaoCampanhaSlug"));
var campanhaRouter = (0, express_1.Router)();
exports.campanhaRouter = campanhaRouter;
campanhaRouter.get('/promocao', function (request, response) {
    return (0, listPromocoesCampanha_1.default)().handle(request, response);
});
campanhaRouter.get('/promocao/listar', function (request, response) {
    return (0, getPromocaoByID_1.default)().handle(request, response);
});
campanhaRouter.get('/promocao/:id', function (request, response) {
    return (0, getPromocaoCampanha_1.default)().handle(request, response);
});
campanhaRouter.get('/promocao/:id/texto', function (request, response) {
    return (0, getPromocaoCampanhaText_1.default)().handle(request, response);
});
campanhaRouter.get('/promocao/:id/slug', function (request, response) {
    return (0, getPromocaoCampanhaSlug_1.default)().handle(request, response);
});
