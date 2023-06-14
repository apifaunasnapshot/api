import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Student from "../models/Student";
import Teacher from "../models/Teacher";

class StudentAuth {
  static async checkToken(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const token = request.headers["authstudent"] as string;
      if (!token) throw new Error("invalid token");
      jwt.verify(token, process.env.SECRET!);

      next();
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { username, teacherUser } = request.body;
      if (!username) throw new Error("username invalid");
      if (!teacherUser) throw new Error("teacherUser invalid");

      const teacher = await Teacher.findOne({ username: teacherUser }).populate(
        "classRoom"
      );

      const student = teacher?.classRoom.some(
        (user) => user.username === username
      );
      if (!student) throw new Error("student not found");

      const token = jwt.sign({ username }, process.env.SECRET!);

      response
        .status(200)
        .send({ message: "Authentication successful!", token });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default StudentAuth;
