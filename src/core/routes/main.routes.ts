import { Router } from "express";
import * as controllers from "../controllers/index.controller";

const mainRouter = Router();

// Hello
mainRouter.get("/hello", controllers.sayHello);

// Hellow Again
mainRouter.get("/hello-again", controllers.sayHello2);

export { mainRouter };