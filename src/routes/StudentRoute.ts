import { Router } from "express";
import StudentController from "../controllers/StudentController";
import TeacherAuth from "../authentication/TeacherAuth";

const StudentRoute = Router();

StudentRoute.get("/student", StudentController.getStudents)
  .post("/student", StudentController.createStudent)
  .delete(
    "/student/:username",
    TeacherAuth.checkToken,
    StudentController.deleteStudent
  );

export default StudentRoute;
