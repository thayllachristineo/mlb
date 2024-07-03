import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import searchController from './controllers/search.controller';
import detailsController from './controllers/details.controller';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(searchController);
app.use(detailsController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
