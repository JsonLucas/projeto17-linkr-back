import { Router } from "express";
import getPosts from "../../controllers/getPostsController.js";
import getUser from "../../controllers/getUserController.js";
import publishController from "../../controllers/publishController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import urlMiddleware from "../../middlewares/urlMiddleware.js";

const publish = Router();
publish.post('/newPost', authMiddleware, urlMiddleware, publishController);
publish.get('/getPosts', getPosts);
publish.get('/getUser', authMiddleware, getUser);

export default publish;