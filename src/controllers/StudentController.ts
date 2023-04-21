import { Request, Response } from "express";
import Student from "../models/Student";

class StudentController {
  static async getStudents(request: Request, response: Response) {
    try {
      const students = await Student.find();

      const filteredUStudents = students.map((student) => ({
        username: student.username,
        attempts: student.attempts,
      }));

      response.status(200).send(filteredUStudents);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async createStudent(request: Request, response: Response) {
    try {
      const newStudent = new Student(request.body);

      await newStudent.save();
      response.status(200).send({ message: "student created" });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async deleteStudent(request: Request, response: Response) {
    try {
      const { username } = request.params;
      await Student.findOneAndDelete({ username });
      response.status(200).send({ message: `${username} deleted` });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default StudentController;
