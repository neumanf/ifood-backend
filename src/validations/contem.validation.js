const Joi = require("joi");

const createContemSchema = Joi.object({
    
    p_id: Joi.number().required(),
    i_id: Joi.number().required(),
    
});

module.exports = {
    createContemSchema,
};
