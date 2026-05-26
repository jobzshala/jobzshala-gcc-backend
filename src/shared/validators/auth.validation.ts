import Joi from 'joi';

export const loginValidation = Joi.object({

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()

});

export const registerValidation = Joi.object({

    full_name: Joi.string()
        .min(2)
        .max(100)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required(),

    phone: Joi.string()
        .min(10)
        .max(15)
        .optional()

});