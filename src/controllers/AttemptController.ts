import { Request, Response } from "express";
import Student from "../models/Student";
import Attempt from "../models/Attempt";
import Teacher from "../models/Teacher";

class AttemptController {
  static async addAttempt(request: Request, response: Response) {
    try {
      const { username } = request.params;
      const { phaseOne, phaseTwo, totalAnimals } = request.body;
      const newAttempt = new Attempt({
        phaseOne,
        phaseTwo,
        totalAnimals,
        date: new Date(),
      });

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

      if (student == null) return response.status(200).send([]);

      const filteredAttempts = student?.attempts.map((attempt) => {
        return {
          date: attempt.date,
          phaseOne: attempt.phaseOne,
          phaseTwo: attempt.phaseTwo,
        };
      });

      response.status(200).send(filteredAttempts);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async getAllAttemptsByTeacherStudents(
    request: Request,
    response: Response
  ) {
    try {
      const { username } = request.params;

      const teacher = await Teacher.findOne({ username })
        .populate("classRoom")
        .populate({
          path: "classRoom",
          populate: { path: "attempts", model: "Attempt" },
        });
      if (teacher == null) return response.status(200).send([]);

      const classRoom = teacher.classRoom.map((student) => ({
        username: student.username,
        attempts: student.attempts.map(({ date, phaseOne, phaseTwo }) => ({
          date,
          phaseOne,
          phaseTwo,
        })),
      }));

      response.status(200).send(classRoom);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default AttemptController;
