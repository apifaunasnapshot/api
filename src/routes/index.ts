import express, { Request, Response, Express } from "express";
import cors from "cors";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";

const routes = (app: Express) => {
  app
    .route("/")
    .get((req: Request, res: Response) => res.status(200).send("Hello"));

  app.use(express.json(), cors(), TeacherRoute, StudentRoute);
};

export default routes;
