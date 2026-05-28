export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: false
        });
        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details.map((item) => item.message)
            });
        }
        next();
    };
};
