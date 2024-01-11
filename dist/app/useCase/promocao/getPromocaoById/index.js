"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromocaoRepository_1 = require("../../../repository/implements/PromocaoRepository");
var getPromocaoByIdController_1 = require("./getPromocaoByIdController");
var getPromocaoByIdUseCase_1 = require("./getPromocaoByIdUseCase");
exports.default = (function () {
    var promocaoRepository = new PromocaoRepository_1.PromocaoRepository();
    var getPromocaoByIdUseCase = new getPromocaoByIdUseCase_1.GetPromocaoByIdUseCase(promocaoRepository);
    var getPromocaoByIdController = new getPromocaoByIdController_1.GetPromocaoByIdController(getPromocaoByIdUseCase);
    return getPromocaoByIdController;
});
