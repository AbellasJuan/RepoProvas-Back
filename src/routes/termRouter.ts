import { Router } from "express";
// import * as userController from "../controllers/userController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
// import { userSchema } from "../schemas/userSchema.js";
import * as termController from "../controllers/termController.js";


const termRouter = Router();

// userRouter.post("/auth/sign-up", validateSchemaMiddleware(userSchema), userController.signUp);
// userRouter.post("/auth/sign-in", validateSchemaMiddleware(userSchema), userController.signIn);

termRouter.get("/terms", ensureAuthenticatedMiddleware, termController.findAll);
// userRouter.get("/user/:id", validateSchemaMiddleware(userSchema), userController.findById);

export default termRouter;