import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/auth/sign-up", validateSchemaMiddleware(userSchema), authController.signUp);
authRouter.post("/auth/sign-in", validateSchemaMiddleware(userSchema), authController.signIn);

export default authRouter;