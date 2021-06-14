const Joi = require('joi');

const insertSchema = Joi.object({
    pseudo: Joi.string().required().min(2),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
}).required();

const updateSchema = Joi.object({
    pseudo: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
}).required();

module.exports = { insertSchema, updateSchema };
