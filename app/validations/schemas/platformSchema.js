const Joi = require('joi');

const insertSchema = Joi.object({
    name: Joi.string().required().min(1),
    logo: Joi.string().uri()
}).required();

module.exports = { insertSchema };