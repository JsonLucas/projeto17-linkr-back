import { Router } from "express";
import signUser from "./signUser/index.js";
import usersRoutes from "./users/index.js";
import publish from "./publish/index.js";

const routes = Router();
routes.use(signUser);
routes.use(usersRoutes);
routes.use(publish);

export default routes;
