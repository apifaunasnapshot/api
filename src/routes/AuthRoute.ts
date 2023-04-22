import { Router } from "express";
import TeacherAuth from "../authentication/TeacherAuth";
import StudentAuth from "../authentication/StudentAuth";

const AuthRoute = Router();

AuthRoute.post("/auth/teacher", TeacherAuth.login);
AuthRoute.post("/auth/student", StudentAuth.login);

export default AuthRoute;
