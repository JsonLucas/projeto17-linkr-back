import { Router } from 'express';
import getUserProfileMiddleware from '../../middlewares/getUserProfileMiddleware.js';
import getUserProfileController from '../../controllers/getUserProfileController.js';

const usersRoutes = Router();
usersRoutes.get('/users/:id', getUserProfileMiddleware, getUserProfileController);

export default usersRoutes;
