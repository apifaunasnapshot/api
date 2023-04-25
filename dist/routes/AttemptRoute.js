"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AttemptController_1 = __importDefault(require("../controllers/AttemptController"));
const AttemptRoute = (0, express_1.Router)();
AttemptRoute.post("/attempt/:username", AttemptController_1.default.addAttempt);
AttemptRoute.get("/attempt/:username", AttemptController_1.default.getAttempt);
exports.default = AttemptRoute;
