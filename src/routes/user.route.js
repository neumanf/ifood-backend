const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:userId", userController.getUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
