"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promocaoRouter = void 0;
var express_1 = require("express");
var getPromocaoById_1 = __importDefault(require("../app/useCase/promocao/getPromocaoById/"));
var getAllPromocao_1 = __importDefault(require("../app/useCase/promocao/getAllPromocao/"));
var promocaoRouter = (0, express_1.Router)();
exports.promocaoRouter = promocaoRouter;
promocaoRouter.get('/promocao', function (request, response) {
    return (0, getAllPromocao_1.default)().handle(request, response);
});
promocaoRouter.get('/promocao/:id', function (request, response) {
    return (0, getPromocaoById_1.default)().handle(request, response);
});
