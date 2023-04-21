"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TeacherRoute_1 = __importDefault(require("./TeacherRoute"));
const StudentRoute_1 = __importDefault(require("./StudentRoute"));
const routes = (app) => {
    app
        .route("/")
        .get((req, res) => res.status(200).send("Hello"));
    app.use(express_1.default.json(), (0, cors_1.default)(), TeacherRoute_1.default, StudentRoute_1.default);
};
exports.default = routes;
