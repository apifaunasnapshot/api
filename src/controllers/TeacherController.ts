import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Teacher from "../models/Teacher";
import StandardAnimal from "../models/StandardAnimal";
import Animal from "../models/Animal";

class TeacherController {
  static async getTeachers(request: Request, response: Response) {
    try {
      const teachers = await Teacher.find().populate("animals");

      const filteredTeachers = teachers.map((teacher) => ({
        name: teacher.name,
        username: teacher.username,
        classRoom: teacher.classRoom.map(({ username }) => username),
        animals: teacher.animals.map(({ name }) => name),
      }));

      response.status(200).send(filteredTeachers);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async createTeacher(request: Request, response: Response) {
    try {
      const { name, username, password } = request.body;

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const pattern = /[^\w]/gm;

      if (pattern.test(username))
        throw new Error('unsupported characters in "username"'); // eslint-disable-line

      const newTeacher = new Teacher({
        name,
        username,
        password: passwordHash,
        classRoom: [],
        animals: [],
      });
      await newTeacher.save();

      const animals = (await StandardAnimal.find()).map(
        ({ name, img }) =>
          new Animal({
            name,
            img,
            selected: false,
            teacher: newTeacher,
          })
      );
      animals.forEach(async (animal) => await animal.save());
      await newTeacher.updateOne({ $push: { animals: animals } });

      response.status(200).send({ message: "registered teacher" });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async deleteTeacher(request: Request, response: Response) {
    try {
      const { username, password } = request.body;

      const teacher = await Teacher.findOne({ username });
      const checkPassword = await bcrypt.compare(password, teacher!.password);
      console.log(checkPassword, teacher!.password, password);
      if (!checkPassword) throw new Error("username or password invalid");

      const deletedTeacher = await Teacher.findOneAndDelete({ username });

      if (!deletedTeacher) throw new Error("username or password invalid");
      response.status(200).send({ message: `${username} deleted` });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default TeacherController;
