const Joi = require("@hapi/joi");

const validationRegister = data => {

    const schema = Joi.object({
        name: Joi.string()
            .min(5)
            .max(225)
            .required()
            .messages({
                'string.base': " should be a type of text",
                'string.empty': "name cannot be an empty field",
                'string.min': "name is required of {#limit}",
                'string.max': "name length must be less than or equal to {#limit} characters long",
                'any.required': "name is a required field"
            }),
        email: Joi.string()
            .email()
            .max(256)
            .required()
            .messages({
                'string.email': " should be a type of text",
                'string.empty': "email cannot be an empty field",
                'string.min': "email is required of {#limit}",
                'any.required': "email is a required field"
            }),

        password: Joi.string()
            .min(5)
            .max(225)
            .required()
            .messages({
                'string.base': " should be a type of text",
                'string.empty': "password cannot be an empty field",
                'string.min': `"password is required of {#limit}"`,
                'any.required': "password is a required field"
            }),
    });
    return schema.validate(data, { abortEarly: false })
}

const validationLogin = data => {

    const schema = Joi.object({
        email: Joi.string()
            .email()
            .max(256)
            .required()
            .messages({
                'string.email': " should be a type of text",
                'string.empty': "email cannot be an empty field",
                'string.min': `"email is required of {#limit}"`,
                'any.required': "email is a required field"
            }),

        password: Joi.string()
            .min(5)
            .max(225)
            .required()
            .messages({
                'string.base': " should be a type of text",
                'string.empty': "password cannot be an empty field",
                'string.min': `"password is required of {#limit}"`,
                'any.required': "password is a required field"
            }),
    });
    return schema.validate(data, { abortEarly: false })
}

module.exports.validationRegister = validationRegister;
module.exports.validationLogin = validationLogin; 