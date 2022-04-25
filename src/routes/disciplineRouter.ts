import { Router } from "express";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import * as disciplineController from "../controllers/disciplineController.js";

const disciplineRouter = Router();

disciplineRouter.get("/disciplines/:termId", ensureAuthenticatedMiddleware, disciplineController.findDisciplinesByTermId)

export default disciplineRouter;