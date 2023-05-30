// ./index.ts
/// joi do TS -> zod

import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './utils/statusCodes';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';
import userRouter from './routes/user.router';
import errorMiddleware from './middleware/error.middleware';


const app = express();

app.use(express.json());


app.get('/', (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);
app.use(userRouter);
app.use(errorMiddleware);

// app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
//     const { name, message, details } = err as any;
//     console.log(`name: ${name}`);
  
//     switch (name) {
//       case 'BadRequestError':
//         res.status(400).json({ message });
//         break;
//       case 'ValidationError':
//         res.status(400).json({ message: details[0].message });
//         break;
//       case 'NotFoundError':
//         res.status(404).json({ message });
//         break;
//       case 'ConflictError':
//         res.status(409).json({ message });
//         break;
//       default:
//         console.error(err);
//         res.sendStatus(500);
//     }
  
//     next();
//   });
  // colocar esse middleware após a declaração de outros midd, senão não irá capturar os erros dos demais. 


  const PORT = process.env.DB_HOSTNAME_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});

