import Joi from 'joi';

//
// ========================================
// LOGIN VALIDATION
// ========================================
//

export const loginValidation = Joi.object({

    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages({

            'string.empty': 'Email is required',

            'string.email': 'Invalid email format'

        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .messages({

            'string.empty': 'Password is required',

            'string.min': 'Password must be at least 6 characters'

        })

});

//
// ========================================
// REGISTER VALIDATION
// ========================================
//

export const registerValidation = Joi.object({

    full_name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({

            'string.empty': 'Full name is required'

        }),

    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages({

            'string.empty': 'Email is required',

            'string.email': 'Invalid email format'

        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .messages({

            'string.empty': 'Password is required'

        }),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .optional()
        .messages({

            'string.pattern.base': 'Phone number must be 10 digits'

        }),

    role_id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({

            'number.base': 'Role ID must be a number'

        })

});

//
// ========================================
// FORGOT PASSWORD VALIDATION
// ========================================
//

export const forgotPasswordValidation = Joi.object({

    email: Joi.string()
        .email()
        .trim()
        .required()

});

//
// ========================================
// RESET PASSWORD VALIDATION
// ========================================
//

export const resetPasswordValidation = Joi.object({

    token: Joi.string()
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()

});

//
// ========================================
// CHANGE PASSWORD VALIDATION
// ========================================
//

export const changePasswordValidation = Joi.object({

    old_password: Joi.string()
        .required(),

    new_password: Joi.string()
        .min(6)
        .max(20)
        .required()

});