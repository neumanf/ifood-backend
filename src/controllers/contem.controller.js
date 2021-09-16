const httpStatus = require("http-status");


const contemService = require("../services/contem.service");
const { createContemSchema } = require("../validations/contem.validation");

const createContem = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    const payload = createContemSchema.validate(req.body);

    if (payload.error) {
        const errors = payload.error.details.map((el) => el.message);

        return res.status(httpStatus.BAD_REQUEST).send({ error: errors, data: req.body });
    }

    try {
        await contemService.createContem(payload.value);

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getAllContem = async (req, res) => {
    // res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const contens = await contemService.getAllContem();

        return res.status(httpStatus.OK).send(contens);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getContem = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const contem = await contemService.getPossuiById(req.params.userId);

        if (contem && contem[0]) {
            return res.status(httpStatus.OK).send(contem[0]);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

module.exports = {
    createContem,
    getAllContem,
    getContem,
};
