"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.UnauthorizedError = exports.NotFoundError = exports.MissingParamError = exports.BadRequestError = exports.ApiError = void 0;
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(message, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return ApiError;
}(Error));
exports.ApiError = ApiError;
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        return _super.call(this, message, 400) || this;
    }
    return BadRequestError;
}(ApiError));
exports.BadRequestError = BadRequestError;
var MissingParamError = /** @class */ (function (_super) {
    __extends(MissingParamError, _super);
    function MissingParamError(message) {
        return _super.call(this, message, 400) || this;
    }
    return MissingParamError;
}(ApiError));
exports.MissingParamError = MissingParamError;
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        return _super.call(this, message, 404) || this;
    }
    return NotFoundError;
}(ApiError));
exports.NotFoundError = NotFoundError;
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        return _super.call(this, message, 401) || this;
    }
    return UnauthorizedError;
}(ApiError));
exports.UnauthorizedError = UnauthorizedError;
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(message) {
        return _super.call(this, message, 500) || this;
    }
    return ServerError;
}(ApiError));
exports.ServerError = ServerError;
