import { Request, Response } from "express";
import Student from "../models/Student";
import Attempt from "../models/Attempt";
import IAttempt from "../interfaces/IAttempt";

class AttemptController {
  static async addAttempt(request: Request, response: Response) {
    try {
      const { username } = request.params;
      const { phaseOne, phaseTwo, totalAnimals } = request.body;
      const date = new Date();
      const aux = { phaseOne, phaseTwo, totalAnimals, date };
      const newAttempt = new Attempt(aux);

      await newAttempt.save();

      await Student.findOneAndUpdate(
        { username },
        { $push: { attempts: newAttempt } }
      );

      response.status(200).send("Create new attempt!");
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async getAttempt(request: Request, response: Response) {
    try {
      const { username } = request.params;

      const student = await Student.findOne({
        username,
      }).populate("attempts");

      if (student == null) response.status(200).send([]);

      const filteredAttempts = student?.attempts.map((attempt) => {
        return {
          date: attempt.date,
          phaseOne: attempt.phaseOne,
          phaseTwo: attempt.phaseTwo,
          totalAnimals: attempt.totalAnimals,
        };
      });

      response.status(200).send(filteredAttempts);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default AttemptController;
