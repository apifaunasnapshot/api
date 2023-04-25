import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Teacher from "../models/Teacher";

class TeacherController {
  static async getTeachers(request: Request, response: Response) {
    try {
      const teachers = await Teacher.find().populate("classRoom");

      const filteredTeachers = teachers.map((teacher) => ({
        name: teacher.name,
        username: teacher.username,
        classRoom: teacher.classRoom.map(({ username }) => username),
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
      });

      await newTeacher.save();
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
