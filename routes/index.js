import { Router } from "express";
import signUser from "./signUser/index.js";
import publish from "./publish/index.js";

const routes = Router();
routes.use(signUser);
routes.use(publish);

export default routes;