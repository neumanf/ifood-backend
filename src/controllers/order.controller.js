const httpStatus = require("http-status");

const orderService = require("../services/order.service");
const { createOrderSchema } = require("../validations/order.validation");

const createOrder = async (req, res) => {
    const payload = createOrderSchema.validate(req.body);
    const { userId } = req.params;

    if (payload.error) {
        const errors = payload.error.details.map((el) => el.message);

        return res.status(httpStatus.BAD_REQUEST).send({ error: errors, data: req.body });
    }

    try {
        await orderService.createOrder({ c_cpf: userId, ...payload.value });

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado. "] });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders(req.params.userId);

        if (orders) {
            return res.status(httpStatus.OK).send(orders);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Não há pedidos." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getOrder = async (req, res) => {
    try {
        const order = await orderService.getOrder([req.params.userId, req.params.orderId]);

        if (order) {
            return res.status(httpStatus.OK).send(order);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Pedido não encontrado." });
        }
    } catch (error) {
        console.log(error);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

module.exports = {
    createOrder,
    getOrders,
    getOrder,
};
