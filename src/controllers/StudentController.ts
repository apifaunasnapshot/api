import { Request, Response } from "express";
import Student from "../models/Student";
import Teacher from "../models/Teacher";

class StudentController {
  static async getStudents(request: Request, response: Response) {
    try {
      const students = await Student.find()
        .populate("attempts")
        .populate("teacher");

      const filteredUStudents = students.map((student) => ({
        username: student.username,
        attempts: student.attempts.map(({ date, phaseOne, phaseTwo }) => ({
          date,
          phaseOne,
          phaseTwo,
        })),
        teacher: student.teacher.username,
      }));

      response.status(200).send(filteredUStudents);
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async createStudent(request: Request, response: Response) {
    try {
      const { username, teacherName } = request.body;

      const teacher = await Teacher.findOne({ name: teacherName });
      const newStudentData = { username, teacher };

      const newStudent = new Student(newStudentData);
      await newStudent.save();

      await teacher?.updateOne({ $push: { classRoom: newStudent } });

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
