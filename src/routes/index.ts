import { Router } from "express";
import authRouter from "./authRouter.js";
import disciplineRouter from "./disciplineRouter.js";
import teacherRouter from "./teacherRouter.js";
import termRouter from "./termRouter.js";
import testRouter from "./testRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(termRouter);
router.use(disciplineRouter);
router.use(testRouter);
router.use(authRouter);
router.use(teacherRouter);

export default router;