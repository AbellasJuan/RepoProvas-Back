import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";


const userRouter = Router();

userRouter.post("/auth/sign-up", validateSchemaMiddleware(userSchema), userController.signUp);
userRouter.post("/auth/sign-in", validateSchemaMiddleware(userSchema), userController.signIn);

userRouter.get("/users", ensureAuthenticatedMiddleware, userController.findAllUsers);
userRouter.get("/user/:id", validateSchemaMiddleware(userSchema), userController.findById);

export default userRouter;