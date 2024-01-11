"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlphaService_1 = require("../../../service/AlphaService/implements/AlphaService");
var controller_1 = require("./controller");
var usecase_1 = require("./usecase");
exports.default = (function () {
    var alphaService = new AlphaService_1.AlphaService();
    var usecase = new usecase_1.GetPromocaoByIDUseCase(alphaService);
    return new controller_1.GetPromocaoByIDController(usecase);
});
