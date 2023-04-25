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
const Attempt_1 = __importDefault(require("../models/Attempt"));
class AttemptController {
    static addAttempt(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = request.params;
                const { phaseOne, phaseTwo, totalAnimals } = request.body;
                const date = new Date();
                const aux = { phaseOne, phaseTwo, totalAnimals, date };
                const newAttempt = new Attempt_1.default(aux);
                yield newAttempt.save();
                yield Student_1.default.findOneAndUpdate({ username }, { $push: { attempts: newAttempt } });
                response.status(200).send("Create new attempt!");
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
    static getAttempt(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username } = request.params;
                const student = yield Student_1.default.findOne({
                    username,
                }).populate("attempts");
                if (student == null)
                    response.status(200).send([]);
                const filteredAttempts = student === null || student === void 0 ? void 0 : student.attempts.map((attempt) => {
                    return {
                        date: attempt.date,
                        phaseOne: attempt.phaseOne,
                        phaseTwo: attempt.phaseTwo,
                        totalAnimals: attempt.totalAnimals,
                    };
                });
                response.status(200).send(filteredAttempts);
            }
            catch (error) {
                response.status(500).send({ error: "Error", message: error.message });
            }
        });
    }
}
exports.default = AttemptController;
