const express = require("express");
const router = express.Router();
const { getAllGoods } = require("../../controllers/shops/mc_duck-controller");

router.get("/mcduck", getAllGoods);

module.exports = router;
