"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordValidation = exports.resetPasswordValidation = exports.forgotPasswordValidation = exports.registerValidation = exports.loginValidation = void 0;
const joi_1 = __importDefault(require("joi"));
//
// ========================================
// LOGIN VALIDATION
// ========================================
//
exports.loginValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .trim()
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Invalid email format'
    }),
    password: joi_1.default.string()
        .min(6)
        .max(20)
        .required()
        .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters'
    })
});
//
// ========================================
// REGISTER VALIDATION
// ========================================
//
exports.registerValidation = joi_1.default.object({
    full_name: joi_1.default.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
        'string.empty': 'Full name is required'
    }),
    email: joi_1.default.string()
        .email()
        .trim()
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Invalid email format'
    }),
    password: joi_1.default.string()
        .min(6)
        .max(20)
        .required()
        .messages({
        'string.empty': 'Password is required'
    }),
    phone: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .optional()
        .messages({
        'string.pattern.base': 'Phone number must be 10 digits'
    }),
    role_id: joi_1.default.number()
        .integer()
        .positive()
        .required()
        .messages({
        'number.base': 'Role ID must be a number'
    })
});
//
// ========================================
// FORGOT PASSWORD VALIDATION
// ========================================
//
exports.forgotPasswordValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .trim()
        .required()
});
//
// ========================================
// RESET PASSWORD VALIDATION
// ========================================
//
exports.resetPasswordValidation = joi_1.default.object({
    token: joi_1.default.string()
        .required(),
    password: joi_1.default.string()
        .min(6)
        .max(20)
        .required()
});
//
// ========================================
// CHANGE PASSWORD VALIDATION
// ========================================
//
exports.changePasswordValidation = joi_1.default.object({
    old_password: joi_1.default.string()
        .required(),
    new_password: joi_1.default.string()
        .min(6)
        .max(20)
        .required()
});
