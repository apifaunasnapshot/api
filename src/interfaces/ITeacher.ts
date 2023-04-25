import IStudent from "./IStudent";

export default interface ITeacher {
  username: string;
  password: string;
  classRoom: IStudent[];
}
