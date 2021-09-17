const Joi = require("joi");

const createRatingSchema = Joi.object({
    e_cnpj: Joi.string().min(11).max(14).required(),
    nota: Joi.number().min(1).max(5).integer(),  
});

const cpfSchema = Joi.string().min(11).max(14).required();

module.exports = {
    createRatingSchema,
    cpfSchema,
};
