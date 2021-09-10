const httpStatus = require("http-status");

const createRating = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Ratings", ok: true });
};

const getRatings = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Ratings", ok: true });
};

const getRating = async (req, res) => {
    res.status(httpStatus.OK).send({ message: "Ratings", ok: true });
};

module.exports = {
    createRating,
    getRatings,
    getRating,
};
