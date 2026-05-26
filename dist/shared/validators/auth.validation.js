"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required(),
    password: joi_1.default.string()
        .min(6)
        .max(20)
        .required()
});
exports.registerValidation = joi_1.default.object({
    full_name: joi_1.default.string()
        .min(2)
        .max(100)
        .required(),
    email: joi_1.default.string()
        .email()
        .required(),
    password: joi_1.default.string()
        .min(6)
        .max(20)
        .required(),
    phone: joi_1.default.string()
        .min(10)
        .max(15)
        .optional()
});
