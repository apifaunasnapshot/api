import { Schema, model } from "mongoose";
import IAttempt from "../interfaces/IAttempt";

const attemptSchema = new Schema<IAttempt>({
  date: { type: Date, required: true },
  phaseOne: { type: Number, required: true },
  phaseTwo: { type: Number, required: true },
  totalAnimals: { type: Number, required: true },
});

const Attempt = model<IAttempt>("Attempt", attemptSchema);

export default Attempt;
