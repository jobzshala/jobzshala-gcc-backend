import express from 'express';

import authRoutes from '../modules/auth/auth.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.get('/health', (req, res) => {
    return res.json({
        status: true,
        message: 'API Running'
    });
});

export default router;