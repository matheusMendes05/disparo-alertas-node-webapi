import 'express-async-errors';
import express from 'express';
import { router } from './routes';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { AppDataSource } from './database/data-source';

import cors from 'cors';
import { errorMiddleware } from './middleware/errorMiddleware';

dotenv.config();

const app = express();

// // inicializando banco de dados...
AppDataSource.initialize()
  .then((e) => console.log('connected in database'))
  .catch((error) => console.log(error.message));

app.use(cors());
app.use(express.json());

app.use(router);

// middleware error
app.use(errorMiddleware);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running in...', process.env.PORT);
});
