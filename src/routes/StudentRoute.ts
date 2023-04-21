import { Router } from "express";

const StudentRoute = Router();

StudentRoute.get("/student")
  .post("/student")
  .put("/student/:username")
  .delete("/student/:username");

export default StudentRoute;
