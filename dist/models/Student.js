"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    attempts: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Attempt" }],
});
const Student = (0, mongoose_1.model)("Student", studentSchema);
exports.default = Student;
