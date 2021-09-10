const httpStatus = require("http-status");

const createOrder = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Orders", ok: true });
};

const getOrders = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Orders", ok: true });
};

const getOrder = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Orders", ok: true });
};

module.exports = {
    createOrder,
    getOrders,
    getOrder,
};
