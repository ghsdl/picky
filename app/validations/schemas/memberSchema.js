const Joi = require('joi');

const insertSchema = Joi.object({
    pseudo: Joi.string()
    .required()
    .min(2)
        .message(`Le pseudo doit contenir au moins 2 caractères.`)
    .max(30)
        .message(`Le pseudo doit contenir au maximum 30 caractères.`)
    .pattern(new RegExp('^[^0-9][^@#]+$'))
        .message(`Le pseudo peut contenir seulement des lettres, des chiffres et des espaces.`),
        
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
        .message('Veuillez saisir un email valide.')
    .required(),

    password: Joi.string()
    .required()
    .min(4)
        .message(`Le mot de passe doit contenir au moins 4 caractères.`)
    .max(30)
        .message(`Le mot de passe doit contenir au maximum 30 caractères.`)
    .pattern(new RegExp('^(.{0,12}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$'))
        .message(`Le mot de passe peut contenir des chiffres, des lettres et des caractères spéciaux.`),

    confirmationPassword: Joi.string()
    .required()
    .valid(Joi.ref('password'))
    .messages({'any.only': 'Les mots de passe doivent être identiques.'})
}).required();

const updateSchema = Joi.object({
    pseudo: Joi.string()
    .min(2)
        .message(`Le pseudo doit contenir au moins 2 caractères.`)
    .max(30)
        .message(`Le pseudo doit contenir au maximum 30 caractères.`)
    .pattern(new RegExp('^[^0-9][^@#]+$'))
        .message(`Le pseudo peut contenir seulement des lettres, des chiffres et des espaces.`),
    
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: true } })
        .message('Un(e) utilisateur(rice) est déjà enregistré(e) avec cet email.'),
    
    password: Joi.string()
    .min(4)
        .message(`Le mot de passe doit contenir au moins 4 caractères.`)
    .max(30)
        .message(`Le mot de passe doit contenir au maximum 30 caractères.`)
    .pattern(new RegExp('^(.{0,12}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$'))
        .message(`Le mot de passe peut contenir des chiffres, des lettres et des caractères spéciaux.`),

    confirmationPassword: Joi.string()
    .required()
    .valid(Joi.ref('password'))
        .messages({'any.only': 'Les mots de passe doivent être identiques.'}),
    
    profile_picture: Joi.string()
    .uri()
}).required();

module.exports = { insertSchema, updateSchema };