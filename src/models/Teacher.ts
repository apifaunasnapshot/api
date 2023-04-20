import { Schema, model } from "mongoose";
import ITeacher from "../interfaces/ITeacher";

const teacherSchema = new Schema<ITeacher>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Teacher = model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
