import IAttempt from "./IAttempt";
import ITeacher from "./ITeacher";

export default interface IStudent {
  username: string;
  teacher: ITeacher;
  attempts: IAttempt[];
}
