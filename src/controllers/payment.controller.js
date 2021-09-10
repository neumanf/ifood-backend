const httpStatus = require("http-status");

const createPayment = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Payments", ok: true });
};

const getPayments = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Payments", ok: true });
};

const getPayment = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Payments", ok: true });
};

module.exports = {
    createPayment,
    getPayments,
    getPayment,
};
