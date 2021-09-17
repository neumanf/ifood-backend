const httpStatus = require("http-status");

const ratingService = require("../services/rating.service");
const {createRatingSchema,cpfSchema} = require("../validations/rating.validation")


const createRating = async (req, res) => {
    const { userId } = req.params;
    const bodyPayload = createRatingSchema.validate(req.body);
    const cpfPayload = cpfSchema.validate(userId);

    let bodyErrors;
    let cpfErrors;

    if (bodyPayload.error) bodyErrors = bodyPayload.error.details.map((el) => el.message);
    if (cpfPayload.error) cpfErrors = cpfPayload.error.details.map((el) => el.message);

    if (bodyErrors || cpfErrors) {
        return res.status(httpStatus.BAD_REQUEST).send({ error: bodyErrors.concat(cpfErrors), data: req.body });
    }

    try {
        await ratingService.createRating({ c_cpf: userId, ...bodyPayload.value });

        return res.status(httpStatus.OK).send({ ok: true });
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(httpStatus.BAD_REQUEST).send({ error: "O usuário já possui um método de pagamento." });
        }

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: "Ocorreu um erro inesperado." });
    }
};

const getRatings = async (req, res) => {
    try {
        const ratings = await ratingService.getAllRatings(req.params.userId);

        return res.status(httpStatus.OK).send(ratings);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: ["Ocorreu um erro inesperado."] });
    }
};


module.exports = {
    createRating,
    getRatings,
};
