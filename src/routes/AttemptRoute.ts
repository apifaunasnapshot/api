import { Router } from "express";
import AttemptController from "../controllers/AttemptController";
import StudentAuth from "../authentication/StudentAuth";

const AttemptRoute = Router();

AttemptRoute.get("/attempt/:username", AttemptController.getAttempt);
AttemptRoute.get(
  "/attempt/teacher/:username",
  AttemptController.getAllAttemptsByTeacherStudents
);
AttemptRoute.post(
  "/attempt/:username",
  StudentAuth.checkToken,
  AttemptController.addAttempt
);

export default AttemptRoute;
