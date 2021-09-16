const httpStatus = require("http-status");


const possuiService = require("../services/possui.service");
const { createPossuiSchema } = require("../validations/possui.validation");

const createPossui = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    const payload = createPossuiSchema.validate(req.body);

    if (payload.error) {
        const errors = payload.error.details.map((el) => el.message);

        return res.status(httpStatus.BAD_REQUEST).send({ error: errors, data: req.body });
    }

    try {
        await possuiService.createPossui(payload.value);

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getAllPossui = async (req, res) => {
    // res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const itens = await possuiService.getAllPossui();

        return res.status(httpStatus.OK).send(itens);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getPossui = async (req, res) => {
    //res.status(httpStatus.OK).send({ message: "Items", ok: true });

    try {
        const possui = await possuiService.getPossuiById(req.params.userId);

        if (possui && possui[0]) {
            return res.status(httpStatus.OK).send(possui[0]);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

module.exports = {
    createPossui,
    getAllPossui,
    getPossui,
};
