const express = require("express");
const router = express.Router();
const {
  getAllGoods,
} = require("../../controllers/shops/elari_coffee-controller");

router.get("/elari", getAllGoods);

module.exports = router;
