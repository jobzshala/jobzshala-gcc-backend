"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const redis = new ioredis_1.Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || undefined,
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});
redis.on('connect', () => {
    console.log('✅ Redis Connected');
});
redis.on('error', (err) => {
    console.log('❌ Redis Error');
    console.log(err);
});
exports.default = redis;
