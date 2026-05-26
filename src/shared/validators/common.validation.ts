import Joi from 'joi';

export const idValidation = Joi.number()
    .integer()
    .positive();

export const paginationValidation = Joi.object({

    page: Joi.number()
        .integer()
        .min(1)
        .default(1),

    limit: Joi.number()
        .integer()
        .min(1)
        .max(100)
        .default(10)

});

export const statusValidation = Joi.boolean();

export const searchValidation = Joi.string()
    .allow('')
    .trim();