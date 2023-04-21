"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeacherRoute = (0, express_1.Router)();
TeacherRoute.get("/teacher")
    .post("/teacher")
    .put("/teacher/:username")
    .delete("/teacher/:username");
exports.default = TeacherRoute;
