import { Router } from "express";
import AnimalController from "../controllers/AnimalController";

const AnimalRoute = Router();

AnimalRoute.get("/animal", AnimalController.getAnimals);
AnimalRoute.get("/animal/selected", AnimalController.getSelectedAnimals);

export default AnimalRoute;
