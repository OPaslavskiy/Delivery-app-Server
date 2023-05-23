const express = require("express");
const router = express.Router();
const { getAllGoods } = require("../../controllers/shops/sushi_abw-controller");

router.get("/sushiabw", getAllGoods);

module.exports = router;
