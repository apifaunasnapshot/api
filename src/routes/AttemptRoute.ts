import { Router } from "express";
import AttemptController from "../controllers/AttemptController";

const AttemptRoute = Router();

AttemptRoute.get("/attempt/:username", AttemptController.getAttempt);
AttemptRoute.get(
  "/attempt/teacher/:username",
  AttemptController.getAllAttemptsByTeacherStudents
);
AttemptRoute.post("/attempt/:username", AttemptController.addAttempt);

export default AttemptRoute;
