import { Schema, model } from "mongoose";
import ITeacher from "../interfaces/ITeacher";

const teacherSchema = new Schema<ITeacher>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  classRoom: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

const Teacher = model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
