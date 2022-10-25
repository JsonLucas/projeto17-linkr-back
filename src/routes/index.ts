import { Router } from "express";
import { userRouters } from "./users";

export const routes = Router();
routes.use(userRouters);