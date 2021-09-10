const express = require("express");

const ratingController = require("../controllers/rating.controller");

const router = express.Router();

router.post("/", ratingController.createRating);
router.get("/", ratingController.getRatings);
router.get("/:ratingId", ratingController.getRating);

module.exports = router;
