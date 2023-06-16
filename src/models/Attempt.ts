import { Schema, model } from "mongoose";
import IAttempt from "../interfaces/IAttempt";

const attemptSchema = new Schema<IAttempt>({
  date: { type: Date, required: true },
  phase: { type: String, required: true },
  tries: [
    {
      animal: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

const Attempt = model<IAttempt>("Attempt", attemptSchema);

export default Attempt;
