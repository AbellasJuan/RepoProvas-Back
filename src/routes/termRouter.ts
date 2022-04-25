import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import * as termController from "../controllers/termController.js";

const termRouter = Router();

termRouter.get("/terms", ensureAuthenticatedMiddleware, termController.findAll);

export default termRouter;