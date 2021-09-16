const express = require("express");

const paymentMethodController = require("../controllers/payment-method.controller");

const router = express.Router({ mergeParams: true });

router.post("/", paymentMethodController.createPaymentMethod);
router.delete("/", paymentMethodController.deletePaymentMethod);
router.get("/", paymentMethodController.getPaymentMethods);

module.exports = router;
