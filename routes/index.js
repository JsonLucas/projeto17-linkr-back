import { Router } from "express";
import signUser from "./signUser/index.js";

const routes = Router();
routes.use(signUser);

export default routes;