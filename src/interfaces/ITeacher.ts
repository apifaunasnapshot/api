import IStudent from "./IStudent";

export default interface ITeacher {
  name: string;
  username: string;
  password: string;
  classRoom: IStudent[];
}
