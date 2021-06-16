const Joi = require('joi');

const insertSchema = Joi.object({
    pseudo: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp('^(.{0,12}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$')),
    repeat_password: Joi.ref('password')
}).required();

const updateSchema = Joi.object({
    pseudo: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^(.{0,12}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$')),
    repeat_password: Joi.ref('password')
}).required();

module.exports = { insertSchema, updateSchema };