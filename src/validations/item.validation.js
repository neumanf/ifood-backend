const Joi = require("joi");

const createItemSchema = Joi.object({
    id: Joi.number().required(),
    categoria: Joi.string().min(3).required(),
    nome: Joi.string().min(3).required(),
    preco: Joi.number().require(),
   
});

module.exports = {
    createItemSchema,
};