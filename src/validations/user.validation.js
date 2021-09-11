const Joi = require("joi");

const createUserSchema = Joi.object({
    cpf_cnpj: Joi.string().min(11).max(14).required(),
    nome: Joi.string().min(3).required(),
    endereco: Joi.string().min(3).required(),
    telefone: Joi.string(),
    email: Joi.string().required().email(),
    senha: Joi.string().min(6).required(),
    idade: Joi.number().greater(17).integer(),
    tipo: Joi.string().min(3),
}).or("idade", "tipo");

module.exports = {
    createUserSchema,
};
