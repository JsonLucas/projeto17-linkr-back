import { Router } from "express";
import signUser from "./signUser/index.js";
import usersRoutes from "./users/index.js";

const routes = Router();
routes.use(signUser);
routes.use(usersRoutes);

export default routes;
