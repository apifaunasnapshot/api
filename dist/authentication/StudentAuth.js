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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Student_1 = __importDefault(require("../models/Student"));
class StudentAuth {
    static checkToken(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = request.headers["auth"];
                if (!token)
                    throw new Error("invalid token");
                jsonwebtoken_1.default.verify(token, process.env.SECRET_STUDENT);
                next();
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
    static login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = request.body;
                if (!username)
                    throw new Error("username invalid");
                const student = yield Student_1.default.findOne({ username });
                const token = jsonwebtoken_1.default.sign({ username: student.username }, process.env.SECRET_STUDENT);
                response
                    .status(200)
                    .send({ message: "Authentication successful!", token });
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
}
exports.default = StudentAuth;
