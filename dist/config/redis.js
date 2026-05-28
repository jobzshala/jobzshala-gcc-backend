import { Redis } from 'ioredis';
const redis = new Redis({
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
export default redis;
