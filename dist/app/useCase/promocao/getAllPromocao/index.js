"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromocaoRepository_1 = require("../../../repository/implements/PromocaoRepository");
var getAllPromocaoUseCase_1 = require("../getAllPromocao/getAllPromocaoUseCase");
var getAllPromocaoController_1 = require("./getAllPromocaoController");
exports.default = (function () {
    var promocaoRepository = new PromocaoRepository_1.PromocaoRepository();
    var getAllPromocaoUseCase = new getAllPromocaoUseCase_1.GetAllPromocaoUseCase(promocaoRepository);
    var getAllPromocaoController = new getAllPromocaoController_1.GetAllPromocaoController(getAllPromocaoUseCase);
    return getAllPromocaoController;
});
