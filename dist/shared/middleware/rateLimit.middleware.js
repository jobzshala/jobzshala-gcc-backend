"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginLimiter = exports.apiLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const rate_limit_redis_1 = require("rate-limit-redis");
const redis_1 = __importDefault(require("../../config/redis"));
exports.apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false,
    message: {
        status: false,
        message: 'Too many requests. Please try again later.'
    },
    store: new rate_limit_redis_1.RedisStore({
        sendCommand: (...args) => redis_1.default.call(...args)
    })
});
exports.loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: false,
        message: 'Too many login attempts. Please try again later.'
    },
    store: new rate_limit_redis_1.RedisStore({
        sendCommand: (...args) => redis_1.default.call(...args)
    })
});
