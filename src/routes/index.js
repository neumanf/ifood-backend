const express = require("express");
const userRoute = require("./user.route");
const orderRoute = require("./order.route");
const itemRoute = require("./item.route");
const ratingRoute = require("./rating.route");
const paymentRoute = require("./payment.route");

const router = express.Router();

const defaultRoutes = [
    {
        path: "/users",
        route: userRoute,
    },
    {
        path: "/users/:userId/orders",
        route: orderRoute,
    },
    {
        path: "/users/:userId/orders/:orderId/items",
        route: itemRoute,
    },
    {
        path: "/users/:userId/ratings",
        route: ratingRoute,
    },
    {
        path: "/users/:userId/payments",
        route: paymentRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
