import { Request, Response } from "express";
import Animal from "../models/Animal";

class AnimalController {
  static async getAnimals(request: Request, response: Response) {
    try {
      const animals = await Animal.find();

      const filteredAnimals = animals.map((animal) => ({
        name: animal.name,
        img: animal.img,
        selected: animal.selected,
      }));

      response.status(200).send(filteredAnimals);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async getSelectedAnimals(request: Request, response: Response) {
    try {
      const animals = await Animal.find({ selected: true });

      const filteredAnimals = animals.map((animal) => ({
        name: animal.name,
        img: animal.img,
      }));

      response.status(200).send(filteredAnimals);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default AnimalController;
