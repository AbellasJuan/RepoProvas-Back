import { Router } from "express";
import disciplineRouter from "./disciplineRouter.js";
import termRouter from "./termRouter.js";
import userRouter from "./userRouter.js";

const router = Router();
router.use(userRouter);
router.use(termRouter);
router.use(disciplineRouter);

export default router;