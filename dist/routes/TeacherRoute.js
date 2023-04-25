"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeacherController_1 = __importDefault(require("../controllers/TeacherController"));
const TeacherAuth_1 = __importDefault(require("../authentication/TeacherAuth"));
const TeacherRoute = (0, express_1.Router)();
TeacherRoute.get("/teacher", TeacherController_1.default.getTeachers)
    .post("/teacher", TeacherAuth_1.default.checkToken, TeacherController_1.default.createTeacher)
    .delete("/teacher/:username", TeacherAuth_1.default.checkToken, TeacherController_1.default.deleteTeacher);
exports.default = TeacherRoute;
