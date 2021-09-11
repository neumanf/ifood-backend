const httpStatus = require("http-status");
const Joi = require("joi");

const userService = require("../services/user.service");
const { createUserSchema } = require("../validations/user.validation");

const createUser = async (req, res) => {
    const payload = createUserSchema.validate(req.body);

    if (payload.error) {
        const errors = payload.error.details.map((el) => el.message);

        return res.status(httpStatus.BAD_REQUEST).send({ error: errors, data: req.body });
    }

    try {
        await userService.createUser(payload.value);

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();

        return res.status(httpStatus.OK).send(users);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUserByCpf(req.params.userId);

        if (user && user[0]) {
            return res.status(httpStatus.OK).send(user[0]);
        } else {
            return res.status(httpStatus.NOT_FOUND).send({ error: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUserByCpf(req.params.userId);

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
};
