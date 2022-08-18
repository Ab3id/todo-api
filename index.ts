import express, { Express, Request, Response } from 'express';
import todos from './routes/todos';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: String = process.env.PORT ?? '3000';

app.use('/', todos);

app.listen(port, () => {
  console.log(`⚡️ 🌐 Server is running at https://localhost:${port}`);
});