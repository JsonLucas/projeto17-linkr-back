import { Router } from "express";
import loginController from "../../controllers/loginController.js";
import signUpController from "../../controllers/signUpController.js";
import loginMiddleware from "../../middlewares/loginMiddleware.js";
import signUpMiddleware from "../../middlewares/signUpMiddleware.js";

const signUser = Router();
signUser.post('/login', loginMiddleware, loginController);
signUser.post('/sign-up', signUpMiddleware, signUpController);

export default signUser;