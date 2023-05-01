import { Schema, model } from "mongoose";
import IStandardAnimal from "../interfaces/IStandardAnimal";

const standardAnimalSchema = new Schema<IStandardAnimal>({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

const StandardAnimal = model<IStandardAnimal>(
  "StandardAnimal",
  standardAnimalSchema
);

export default StandardAnimal;
