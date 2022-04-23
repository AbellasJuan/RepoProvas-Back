import { Router } from "express";
import disciplineRouter from "./disciplineRouter.js";
import termRouter from "./termRouter.js";
import testRouter from "./testRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(userRouter);
router.use(termRouter);
router.use(disciplineRouter);
router.use(testRouter);

export default router;