const Joi = require('joi');

const insertSchema = Joi.object({
    betaseries_id: Joi.number().integer().required().min(1),
    title: Joi.string().required().min(1),
    platform: Joi.string().required().min(1),
    poster: Joi.string().uri(),
    member_id: Joi.number().integer().required().min(1)
}).required();

module.exports = { insertSchema };