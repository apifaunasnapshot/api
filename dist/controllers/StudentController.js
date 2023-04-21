"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../models/Student"));
class StudentController {
    static getStudents(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield Student_1.default.find();
                const filteredUStudents = students.map((student) => ({
                    username: student.username,
                    attempts: student.attempts,
                }));
                response.status(200).send(filteredUStudents);
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
    static createStudent(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newStudent = new Student_1.default(request.body);
                yield newStudent.save();
                response.status(200).send({ message: "student created" });
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
    static deleteStudent(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = request.params;
                yield Student_1.default.findOneAndDelete({ username });
                response.status(200).send({ message: `${username} deleted` });
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
}
exports.default = StudentController;
