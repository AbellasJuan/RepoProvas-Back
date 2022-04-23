import { Router } from "express";
import * as testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";


const testRouter = Router();

testRouter.get("/tests/:teacherDisciplineId", ensureAuthenticatedMiddleware, testController.findTestsByTeacherDiscipline);
testRouter.get("/tests/categories/:categoryId", ensureAuthenticatedMiddleware, testController.findTestsByCategoryId);


export default testRouter;