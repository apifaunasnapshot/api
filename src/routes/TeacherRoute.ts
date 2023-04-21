import { Router } from "express";

const TeacherRoute = Router();

TeacherRoute.get("/teacher")
  .post("/teacher")
  .put("/teacher/:username")
  .delete("/teacher/:username");

export default TeacherRoute;
