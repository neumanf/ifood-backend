const Joi = require("joi");

const createPaymentMethodSchema = Joi.object({
    picpay: Joi.string().min(4).required(),
    cartao_de_credito: Joi.string().min(13).max(16).required(),
});

const cpfSchema = Joi.string().min(11).max(14).required();

module.exports = {
    createPaymentMethodSchema,
    cpfSchema,
};
