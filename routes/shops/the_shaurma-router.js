const express = require("express");
const router = express.Router();
const {
  getAllGoods,
} = require("../../controllers/shops/the_shaurma-controller");

router.get("/theshaurma", getAllGoods);

module.exports = router;
