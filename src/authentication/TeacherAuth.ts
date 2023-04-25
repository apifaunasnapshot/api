import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Teacher from "../models/Teacher";

class TeacherAuth {
  static async checkToken(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const token = request.headers["auth"] as string;
      if (!token) throw new Error("invalid token");
      jwt.verify(token, process.env.SECRET_TEACHER!);

      next();
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }

  static async login(request: Request, response: Response) {
    try {
      const { username, password } = request.body;
      if (!username) throw new Error("username invalid");
      const teacher = await Teacher.findOne({ username });
      if (!teacher) throw new Error("Teacher not found");

      const checkPassword = await bcrypt.compare(password, teacher!.password);
      if (!checkPassword) throw new Error("invalid data");

      const token = jwt.sign(
        { username: teacher!.username },
        process.env.SECRET_TEACHER!
      );

      response
        .status(200)
        .send({ message: "Authentication successful!", token });
    } catch (error: any) {
      response.status(500).send({ error: "Error", message: error.message });
    }
  }
}

export default TeacherAuth;
