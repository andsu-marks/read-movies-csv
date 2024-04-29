import { MoviesController } from "@/controllers/MoviesController";
import { Router } from "express";

const moviesRouter = Router();
const moviesController = new MoviesController();

moviesRouter.get("/producersWithGreatestRange", moviesController.index);

export default moviesRouter;