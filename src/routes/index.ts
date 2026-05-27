import express from 'express';

import v1_authRoutes from '../modules/v1/auth/auth.routes';

const router = express.Router();

router.use('/v1/auth', v1_authRoutes);

router.get('/health', (req, res) => {

    return res.json({
        status: true,
        message: 'API Running'
    });

});

export default router;