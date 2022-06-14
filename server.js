import cors from 'cors';
import routes from './routes/index.js';
import express, { json } from 'express';
import { port } from './utils/env-config.js';
import dbConnectionMiddleware from './middlewares/dbConnectionMiddleware.js';

const app = express();

app.use(cors());
app.use(json());
app.use(dbConnectionMiddleware);
app.use(routes);

app.listen(port, () => { console.log(`Server running at localhost:${port}`); });
