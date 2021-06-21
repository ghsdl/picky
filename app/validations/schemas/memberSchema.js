const Joi = require('joi');

const insertSchema = Joi.object({
    pseudo: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmationPassword: Joi.ref('password')
}).required();

const updateSchema = Joi.object({
    id: Joi.number().integer(),
    pseudo: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string(),
    profile_picture: Joi.string().uri()
}).required();

module.exports = { insertSchema, updateSchema };