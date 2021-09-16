const Joi = require("joi");

const createItemSchema = Joi.object({
    categoria: Joi.string().min(3).required(),
    nome: Joi.string().min(3).required(),
    preco: Joi.number().required(),
    e_cnpj: Joi.string().min(11).max(14).required(),
    quantidade: Joi.number().greater(0).required(),
});

module.exports = {
    createItemSchema,
};
