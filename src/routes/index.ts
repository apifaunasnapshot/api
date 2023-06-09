import express, { Request, Response, Express } from "express";
import cors from "cors";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";
import AuthRoute from "./AuthRoute";
import AttemptRoute from "./AttemptRoute";
import AnimalRoute from "./AnimalRoute";

const routes = (app: Express) => {
  app
    .route("/")
    .get((req: Request, res: Response) => res.status(200).send("Hello"));

  app.use(
    express.json(),
    cors(),
    TeacherRoute,
    StudentRoute,
    AuthRoute,
    AttemptRoute,
    AnimalRoute
  );
};

export default routes;
