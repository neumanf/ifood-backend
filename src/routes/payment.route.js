const express = require("express");

const paymentController = require("../controllers/payment.controller");

const router = express.Router();

router.post("/", paymentController.createPayment);
router.get("/", paymentController.getPayments);
router.get("/:paymentId", paymentController.getPayment);

module.exports = router;
