import express from 'express';

import authRoutes from '../modules/v1/auth/auth.routes';

const router = express.Router();

router.use('/internal-team/auth', authRoutes);

router.get('/health', (req, res) => {

  return res.json({
    status: true,
    message: 'API Running'
  });

});

export default router;