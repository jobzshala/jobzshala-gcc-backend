import rateLimit from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';
import redis from '../../config/redis.js';
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: false,
    message: {
        status: false,
        message: 'Too many requests. Please try again later.'
    },
    store: new RedisStore({
        sendCommand: (...args) => redis.call(...args)
    })
});
export const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: false,
        message: 'Too many login attempts. Please try again later.'
    },
    store: new RedisStore({
        sendCommand: (...args) => redis.call(...args)
    })
});
