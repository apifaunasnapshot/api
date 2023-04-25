"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AnimalController_1 = __importDefault(require("../controllers/AnimalController"));
const AnimalRoute = (0, express_1.Router)();
AnimalRoute.get("/animal", AnimalController_1.default.getAnimals);
AnimalRoute.get("/animal/selected", AnimalController_1.default.getSelectedAnimals);
exports.default = AnimalRoute;
