import { Schema, model } from "mongoose";
import IStudent from "../interfaces/IStudent";

const studentSchema = new Schema<IStudent>({
  username: { type: String, required: true, unique: true },
  teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
  attempts: [{ type: Schema.Types.ObjectId, ref: "Attempt" }],
});

const Student = model<IStudent>("Student", studentSchema);

export default Student;
