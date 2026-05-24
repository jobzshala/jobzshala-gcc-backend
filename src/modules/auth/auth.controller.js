import * as service from './auth.service.js';

export const login = async (req, res) => {

    try {

        const result = await service.login(req.body);

        return res.json({
            status: true,
            result
        });

    } catch (err) {

        return res.status(400).json({
            status: false,
            message: err.message
        });

    }
};