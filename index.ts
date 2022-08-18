import express, { Express, Request, Response,NextFunction } from 'express';
import todos from './routes/todos';
import dotenv from 'dotenv';
import HttpException from './exceptions/httpexceptions';

dotenv.config();

const app: Express = express();
const port: String = process.env.PORT ?? '3000';

app.use('/', todos);
app.use('/todo', todos);

//Custom 404 Handler
app.use(function (_, res, __) {
  res.status(404);
  res.json({
      error: 'Resource Not found 🤯'
  });
  return;
});

//Custom Error Handler
app.use(function (err:HttpException,req:Request, res:Response, next:NextFunction) {
  res.status(err.status || 500);
  res.json({
      error: err.message,
  });
  return;
});

app.listen(port, () => {
  console.log(`⚡️ 🌐 Server is running at https://localhost:${port}`);
});