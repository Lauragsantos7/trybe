import { Router } from 'express';
import userController from '../controller/user.controller';

const userRouter = Router();


userRouter.post('/login', userController.login);
userRouter.get('/users', userController.getAllUsers);

export default userRouter;