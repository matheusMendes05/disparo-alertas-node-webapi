import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const port = process.env.DB_PORT ?? 33306;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: port as number,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../**/entity/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  synchronize: true,
});
