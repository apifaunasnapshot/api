import { Router } from "express";
import TeacherController from "../controllers/TeacherController";
import TeacherAuth from "../authentication/TeacherAuth";

const TeacherRoute = Router();

TeacherRoute.get("/teacher", TeacherController.getTeachers)
  .post("/teacher", TeacherAuth.checkToken, TeacherController.createTeacher)
  .delete(
    "/teacher/:username",
    TeacherAuth.checkToken,
    TeacherController.deleteTeacher
  );

export default TeacherRoute;
