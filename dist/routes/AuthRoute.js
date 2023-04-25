"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeacherAuth_1 = __importDefault(require("../authentication/TeacherAuth"));
const StudentAuth_1 = __importDefault(require("../authentication/StudentAuth"));
const AuthRoute = (0, express_1.Router)();
AuthRoute.post("/auth/teacher", TeacherAuth_1.default.login);
AuthRoute.post("/auth/student", StudentAuth_1.default.login);
exports.default = AuthRoute;
