const httpStatus = require("http-status");

const paymentMethodService = require("../services/payment-method.service");
const { createPaymentMethodSchema, cpfSchema } = require("../validations/payment-method.validation");

const createPaymentMethod = async (req, res) => {
    const { userId } = req.params;

    const bodyPayload = createPaymentMethodSchema.validate(req.body);
    const cpfPayload = cpfSchema.validate(userId);

    let bodyErrors;
    let cpfErrors;

    if (bodyPayload.error) bodyErrors = bodyPayload.error.details.map((el) => el.message);
    if (cpfPayload.error) cpfErrors = cpfPayload.error.details.map((el) => el.message);

    if (bodyErrors || cpfErrors) {
        return res.status(httpStatus.BAD_REQUEST).send({ error: bodyErrors.concat(cpfErrors), data: req.body });
    }

    try {
        await paymentMethodService.createPaymentMethod({ c_cpf: userId, ...bodyPayload.value });

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(httpStatus.BAD_REQUEST).send({ error: "O usuário já possui um método de pagamento." });
        }

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Ocorreu um erro inesperado." });
    }
};

const deletePaymentMethod = async (req, res) => {
    try {
        const { userId } = req.params;

        await paymentMethodService.deletePaymentMethod(userId);

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Ocorreu um erro inesperado." });
    }
};

const getPaymentMethods = async (req, res) => {
    try {
        const { userId } = req.params;
        const paymentMethods = await paymentMethodService.getPaymentMethodsByCpf(userId);

        if (paymentMethods && paymentMethods[0]) {
            return res.status(httpStatus.OK).send(paymentMethods[0]);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Métodos de pagamento não encontrados." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Ocorreu um erro inesperado." });
    }
};

module.exports = {
    createPaymentMethod,
    deletePaymentMethod,
    getPaymentMethods,
};
