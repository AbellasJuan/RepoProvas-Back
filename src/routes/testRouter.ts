import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";


const testRouter = Router();

testRouter.get("/tests/:termId", ensureAuthenticatedMiddleware, testController.findTestsByTerm);
testRouter.get("/tests/teacher/:teacherId", ensureAuthenticatedMiddleware, testController.findTestsByTeacherId);

export default testRouter;