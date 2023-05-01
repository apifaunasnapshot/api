import { Schema, model } from "mongoose";
import IAnimal from "../interfaces/IAnimal";

const animalSchema = new Schema<IAnimal>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  selected: { type: Boolean, required: true },
  teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
});

const Animal = model<IAnimal>("Animal", animalSchema);

export default Animal;
