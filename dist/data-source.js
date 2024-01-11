"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
require("dotenv/config");
var db_port = parseInt(process.env.DB_PORT);
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: db_port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["".concat(__dirname, "/**/entity/*.{ts,js}")],
    migrations: ["".concat(__dirname, "/**/migration/*.{ts,js}")],
    subscribers: [],
});
