import {Router} from "express";
import {publishController, getPosts} from "../../controllers/publishController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import urlMiddleware from "../../middlewares/urlMiddleware.js";

const publish = Router();
publish.post('/newPost', authMiddleware, urlMiddleware, publishController);
publish.get('/getPosts', getPosts);

export default publish;