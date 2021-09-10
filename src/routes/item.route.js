const express = require("express");

const itemController = require("../controllers/item.controller");

const router = express.Router();

router.post("/", itemController.createItem);
router.get("/", itemController.getItems);
router.get("/:itemId", itemController.getItem);

module.exports = router;
