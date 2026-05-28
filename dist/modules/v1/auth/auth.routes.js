import express from 'express';
import * as controller from './auth.controller.js';
import { validate } from '../../../shared/middleware/validate.middleware.js';
import { loginValidation } from './auth.validation.js';
const router = express.Router();
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login API
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@test.com
 *               password:
 *                 type: string
 *                 example: Admin@123
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', validate(loginValidation), controller.login);
export default {
    path: '/auth',
    router
};
