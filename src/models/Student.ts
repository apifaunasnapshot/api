import { Schema, model } from "mongoose";
import IStudent from "../interfaces/IStudent";

const studentSchema = new Schema<IStudent>({
  username: { type: String, required: true },
});

const Student = model<IStudent>("Student", studentSchema);

export default Student;
