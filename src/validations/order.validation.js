const Joi = require("joi");

const createOrderSchema = Joi.object({
    id: Joi.number().required(),
    estado: Joi.string().max(50).required(),
    c_cpf: Joi.string().min(11).max(14).required(),
    nota: Joi.number().min(0).max(10),
    comentario: Joi.string().max(255),
    form_pagamento: Joi.string().max(17).required(),
    e_cnpj: Joi.string().min(11).max(14).required(),
});

module.exports = {
    createOrderSchema,
};
