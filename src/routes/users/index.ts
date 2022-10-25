import { Router } from 'express';
import { signInController, signUpController } from '../../controllers/userControllers';
import { signInMiddleware, signUpMiddleware } from '../../middlewares/userMiddleware';

export const userRouters = Router();
userRouters.post('/', signInMiddleware, signUpController);
userRouters.post('/signup', signUpMiddleware, signInController);