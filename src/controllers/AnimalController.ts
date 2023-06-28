import { Request, Response } from "express";
import Teacher from "../models/Teacher";
import Animal from "../models/Animal";

class AnimalController {
  static async getAnimals(request: Request, response: Response) {
    try {
      const { username } = request.params;

      const teacher = await Teacher.findOne({ username }).populate("animals");

      const filteredAnimals = teacher?.animals.map((animal) => ({
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
      const { username } = request.params;

      const teacher = await Teacher.findOne({ username }).populate({
        path: "animals",
        match: { selected: { $eq: true } },
      });

      const filteredAnimals = teacher?.animals.map((animal) => ({
        name: animal.name,
        img: animal.img,
      }));

      response.status(200).send(filteredAnimals);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async updateSelectedField(request: Request, response: Response) {
    try {
      const { username } = request.params;
      const { name, state } = request.body;

      const teacher = await Teacher.findOne({ username }).populate("animals");

      if (
        teacher?.animals.filter((object) => object.selected).length === 4 &&
        state === false
      )
        throw new Error("It's necessary to have at least 4 animals selected");

      const a = await Animal.findOneAndUpdate(
        { teacher, name },
        { $set: { selected: state as boolean } }
      );
      response.status(200).send(a);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default AnimalController;
