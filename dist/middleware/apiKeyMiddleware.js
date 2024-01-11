"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyMiddleware = void 0;
var api_error_1 = require("../helpers/api-error");
var apiKeyMiddleware = function (request, response, next) {
    var x_api_key = request.headers['x-api-key'];
    if (!x_api_key || x_api_key !== process.env.X_API_KEY)
        throw new api_error_1.UnauthorizedError('x-api-key inválida.');
    next();
};
exports.apiKeyMiddleware = apiKeyMiddleware;
