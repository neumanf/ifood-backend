const httpStatus = require("http-status");
const Joi = require("joi");

const itemService = require("../services/item.service");
const { createItemSchema } = require("../validations/item.validation");

const createItem = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    const payload = createItemSchema.validate(req.body);
    const { userId, orderId } = req.params;

    if (payload.error) {
        const errors = payload.error.details.map((el) => el.message);

        return res.status(httpStatus.BAD_REQUEST).send({ error: errors, data: req.body });
    }

    try {
        await itemService.createItem({ c_cpf: userId, orderId, ...payload.value });

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getItems = async (req, res) => {
    // res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const itens = await itemService.getAllItens();

        return res.status(httpStatus.OK).send(itens);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getItem = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const item = await itemService.getItemById(req.params.userId);

        if (item && item[0]) {
            return res.status(httpStatus.OK).send(item[0]);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

module.exports = {
    createItem,
    getItems,
    getItem,
};
