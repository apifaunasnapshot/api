import { Router } from "express";
import AttemptController from "../controllers/AttemptController";

const AttemptRoute = Router();

AttemptRoute.post("/attempt/:username", AttemptController.addAttempt);
AttemptRoute.get("/attempt/:username", AttemptController.getAttempt);

export default AttemptRoute;
