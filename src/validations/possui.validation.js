const Joi = require("joi");

const createPossuiSchema = Joi.object({
    e_cnpj: Joi.string().min(11).max(14).required(),
    i_id: Joi.number().required(),
    quantidade: Joi.number().integer().required()
});

module.exports = {
    createPossuiSchema,
};
