const express = require("express");
const router = express.Router();
const { addOrder } = require("../../controllers/shops/order-controller");
const { validateBody } = require("../../decorators");
const { orderSchemAdd } = require("../../schems/orderSchemAdd");

router.post("/order", addOrder);

// validateBody(orderSchemAdd),

module.exports = router;
