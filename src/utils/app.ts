import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routes } from '../routes';
import { errorMiddleware } from '../middlewares/error';

export const app = express();
app.use(cors());
app.use(json());
app.use(routes);
app.use(errorMiddleware);