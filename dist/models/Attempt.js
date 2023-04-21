"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attemptSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    phaseOne: { type: Number, required: true },
    phaseTwo: { type: Number, required: true },
    totalAnimals: { type: Number, required: true },
});
const Attempt = (0, mongoose_1.model)("Attempt", attemptSchema);
exports.default = Attempt;
