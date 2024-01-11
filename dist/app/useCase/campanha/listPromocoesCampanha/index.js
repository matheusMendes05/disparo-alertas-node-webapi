"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var AlphaService_1 = require("../../../service/AlphaService/implements/AlphaService");
var usecase_1 = require("./usecase");
exports.default = (function () {
    var alphaService = new AlphaService_1.AlphaService();
    var usecase = new usecase_1.ListPromocoesCampanhaUseCase(alphaService);
    var controller = new controller_1.ListPromocoesCampanhaController(usecase);
    return controller;
});
