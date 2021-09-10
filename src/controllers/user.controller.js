const httpStatus = require("http-status");

const userService = require("../services/user.service");

const createUser = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "users", ok: true });
};

const getUsers = async (req, res) => {
    const users = await userService.getAllUsers();

    res.status(httpStatus.OK).send(users);
};

const getUser = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "users", ok: true });
};

const deleteUser = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "users", ok: true });
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
};
