import { Router } from "express";
// import * as userController from "../controllers/userController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
// import { userSchema } from "../schemas/userSchema.js";
import * as disciplinesController from "../controllers/termController.js";


const disciplinesRouter = Router();

// userRouter.post("/auth/sign-up", validateSchemaMiddleware(userSchema), userController.signUp);
// userRouter.post("/auth/sign-in", validateSchemaMiddleware(userSchema), userController.signIn);

disciplinesRouter.get("/disciplines/id", ensureAuthenticatedMiddleware, disciplinesController.findDisciplinesByTermId);

// o periodo tem as disciplinas dele. Eu salvo o id do periodo que foi clicado no "+" LA NO FRONT e quando fizer a requisiçao coloco o id no lugar do id: axios.get(/disciplines/{idDoTerm})

export default disciplinesRouter;