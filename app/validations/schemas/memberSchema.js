const Joi = require('joi');

/*const insertSchema = Joi.object({
    pseudo: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmationPassword: Joi.ref('password')
}).required();*/

const updateSchema = Joi.object({
    pseudo: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string(),
    confirmationPassword: Joi.ref('password')
}).required();

module.exports = { updateSchema };