import { Router } from "express";
import loginController from "../../controllers/loginController.js";
import logoutController from "../../controllers/logoutController.js";
import signUpController from "../../controllers/signUpController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import loginMiddleware from "../../middlewares/loginMiddleware.js";
import signUpMiddleware from "../../middlewares/signUpMiddleware.js";
// import verificatePreviousSessionMiddleware from "../../middlewares/verificatePreviousSessionMiddleware.js";

const signUser = Router();
signUser.post('/login', loginMiddleware, loginController);
signUser.delete('/logout', authMiddleware, logoutController);
signUser.post('/sign-up', signUpMiddleware, signUpController);

export default signUser;