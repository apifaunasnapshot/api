import { Request, Response } from "express";
import StandardAnimal from "../models/StandardAnimal";

class StandardAnimalController {
  static async getAnimals(request: Request, response: Response) {
    try {
      const animals = await StandardAnimal.find();

      const filteredAnimals = animals.map((animal) => ({
        name: animal.name,
        img: animal.img,
      }));

      response.status(200).send(filteredAnimals);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async createAnimal(request: Request, response: Response) {
    try {
      const { name, img } = request.body;

      const newAnimal = new StandardAnimal({ name, img });
      await newAnimal.save();
      response.status(200).send({ message: "Create new animal." });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default StandardAnimalController;
