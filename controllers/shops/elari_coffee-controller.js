const { Elari } = require("../../models/shops");

const { ctrlWrapper } = require("../../decorators");

const getAllGoods = async (req, res) => {
  const results = await Elari.find();
  res.json(results);
};

module.exports = {
  getAllGoods: ctrlWrapper(getAllGoods),
};
