import IStandardAnimal from "./IStandardAnimal";
import ITeacher from "./ITeacher";

export default interface IAnimal extends IStandardAnimal {
  selected: boolean;
  teacher: ITeacher;
}
