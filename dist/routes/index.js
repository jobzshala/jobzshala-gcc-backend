import express from 'express';
//
// VERSION ROUTES
//
import v1Routes from './v1/index.js';
const router = express.Router();
//
// API VERSIONS
//
router.use('/v1', v1Routes);
//
// HEALTH API
//
router.get('/health', (req, res) => {
    return res.json({
        status: true,
        message: 'API Running'
    });
});
export default router;
