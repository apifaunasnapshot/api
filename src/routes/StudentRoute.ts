import { Router } from "express";
import StudentController from "../controllers/StudentController";

const StudentRoute = Router();

StudentRoute.get("/student", StudentController.getStudents)
  .post("/student", StudentController.createStudent)
  .delete("/student/:username", StudentController.deleteStudent);

export default StudentRoute;
