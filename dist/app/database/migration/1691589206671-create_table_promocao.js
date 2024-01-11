"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTablePromocao1691589206671 = void 0;
var typeorm_1 = require("typeorm");
var CreateTablePromocao1691589206671 = /** @class */ (function () {
    function CreateTablePromocao1691589206671() {
    }
    CreateTablePromocao1691589206671.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: 'promocao',
                            columns: [
                                {
                                    name: 'id',
                                    type: 'integer',
                                    isPrimary: true,
                                    isUnique: true,
                                },
                                {
                                    name: 'id_promocao',
                                    type: 'varchar',
                                    isUnique: true,
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'promocao',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'imagem',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'resumo',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'resumo_2',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'texto',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'tipo_promocao',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'regulamento',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'ordem',
                                    type: 'int',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'destaque',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'textodestaque',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'caracteres',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'data_inicio',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'data_fim',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'pergunta',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'slug',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'resultado_texto',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'resultado',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'status',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'modificado',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'criado',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'num_pass',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'num_visto',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                                {
                                    name: 'imagem_full',
                                    type: 'varchar',
                                    width: 100,
                                    isNullable: true,
                                },
                            ],
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTablePromocao1691589206671.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable('promocao')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateTablePromocao1691589206671;
}());
exports.CreateTablePromocao1691589206671 = CreateTablePromocao1691589206671;
