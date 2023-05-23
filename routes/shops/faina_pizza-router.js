const express = require("express");
const router = express.Router();
const {
  getAllGoods,
} = require("../../controllers/shops/faina_pizza-controller");

router.get("/faina", getAllGoods);

module.exports = router;
