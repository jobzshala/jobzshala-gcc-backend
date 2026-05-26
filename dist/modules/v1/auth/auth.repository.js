"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmail = void 0;
const db_1 = __importDefault(require("../../../config/db"));
const findUserByEmail = async (email) => {
    return db_1.default.auth_details.findUnique({
        where: {
            email
        }
    });
};
exports.findUserByEmail = findUserByEmail;
