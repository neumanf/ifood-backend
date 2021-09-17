const express = require("express");

const ratingController = require("../controllers/rating.controller");

const router = express.Router({ mergeParams: true });

router.post("/", ratingController.createRating);
router.get("/", ratingController.getRatings);

module.exports = router;
