"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromocaoRepository_1 = require("../../../repository/implements/PromocaoRepository");
var AlphaService_1 = require("../../../service/AlphaService/implements/AlphaService");
var getPromocaoUseCase_1 = require("./getPromocaoUseCase");
exports.default = (function () {
    var promocaoRepository = new PromocaoRepository_1.PromocaoRepository();
    var alphaService = new AlphaService_1.AlphaService();
    var getPromocaoUseCase = new getPromocaoUseCase_1.GetPromocaoUseCase(promocaoRepository, alphaService);
    return getPromocaoUseCase;
});
