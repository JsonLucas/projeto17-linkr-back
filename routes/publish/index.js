import {Router} from "express";
import {publishController} from "../../controllers/publishController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const publish = Router();
publish.post('/newPost', authMiddleware, publishController);

export default publish;