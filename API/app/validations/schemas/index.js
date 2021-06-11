const Joi = require('joi');

const insertMember = Joi.object({
    pseudo: Joi.string().required().min(2),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(new RegExp('^(.{0,12}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$')),
}).required();