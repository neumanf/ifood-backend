const httpStatus = require("http-status");

const createItem = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Items", ok: true });
};

const getItems = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Items", ok: true });
};

const getItem = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Items", ok: true });
};

module.exports = {
    createItem,
    getItems,
    getItem,
};
