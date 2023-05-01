import { Router } from "express";
import AnimalController from "../controllers/AnimalController";
import StandardAnimalController from "../controllers/StandardAnimalController";

const AnimalRoute = Router();
AnimalRoute.get("/animal", StandardAnimalController.getAnimals);
// AnimalRoute.post("/animal/standard", StandardAnimalController.createAnimal); -> Make admin validation <-
AnimalRoute.get("/animal/:username", AnimalController.getAnimals);
AnimalRoute.get(
  "/animal/selected/:username",
  AnimalController.getSelectedAnimals
);
AnimalRoute.put("/animal/:username", AnimalController.updateSelectedField);

export default AnimalRoute;
