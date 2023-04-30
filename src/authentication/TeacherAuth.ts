import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Teacher from "../models/Teacher";

class TeacherAuth {
  static checkToken(request: Request, response: Response, next: NextFunction) {
    try {
      TeacherAuth.checkTeacherToken(
        request.headers["authteacher"] as string,
        process.env.SECRET_TEACHER!
      );

      next();
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { username, password } = request.body;
      const message = await TeacherAuth.checkTeacher(username, password);

      const token = jwt.sign(username, process.env.SECRET_TEACHER!);

      response.status(200).send({ message, token });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  private static checkTeacherToken(token: string, hash: string): void | never {
    if (!token) throw new Error("invalid token");
    jwt.verify(token, hash);
  }

  private static async checkTeacher(
    username: string,
    password: string
  ): Promise<string | never> {
    if (!username) throw new Error("username invalid");
    const teacher = await Teacher.findOne({ username });
    if (!teacher) throw new Error("Teacher not found");

    const checkPassword = await bcrypt.compare(password, teacher.password);
    if (!checkPassword) throw new Error("invalid data");
    return "Authentication successful!";
  }
}

export default TeacherAuth;
