const express = require("express");

const orderController = require("../controllers/order.controller");

const router = express.Router({ mergeParams: true });

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.get("/:orderId", orderController.getOrder);

module.exports = router;
