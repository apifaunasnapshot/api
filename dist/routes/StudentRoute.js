"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StudentController_1 = __importDefault(require("../controllers/StudentController"));
const StudentRoute = (0, express_1.Router)();
StudentRoute.get("/student", StudentController_1.default.getStudents)
    .post("/student", StudentController_1.default.createStudent)
    .delete("/student/:username", StudentController_1.default.deleteStudent);
exports.default = StudentRoute;
