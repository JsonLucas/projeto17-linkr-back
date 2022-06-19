import { Router } from 'express';
import getUserProfileMiddleware from '../../middlewares/getUserProfileMiddleware.js';
import getUserProfileController from '../../controllers/getUserProfileController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';
import queryUsersController from '../../controllers/queryUsersController.js';

const usersRoutes = Router();
usersRoutes.get('/users/:id', getUserProfileMiddleware, getUserProfileController);
usersRoutes.get('/users/query/:query', authMiddleware, queryUsersController);

export default usersRoutes;
