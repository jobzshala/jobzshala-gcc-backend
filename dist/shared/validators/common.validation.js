"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchValidation = exports.statusValidation = exports.paginationValidation = exports.idValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.idValidation = joi_1.default.number()
    .integer()
    .positive();
exports.paginationValidation = joi_1.default.object({
    page: joi_1.default.number()
        .integer()
        .min(1)
        .default(1),
    limit: joi_1.default.number()
        .integer()
        .min(1)
        .max(100)
        .default(10)
});
exports.statusValidation = joi_1.default.boolean();
exports.searchValidation = joi_1.default.string()
    .allow('')
    .trim();
