import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const userRouter = Router();

userRouter.get("/users", ensureAuthenticatedMiddleware, userController.findAllUsers);
userRouter.get("/user/:id", userController.findById);

export default userRouter;