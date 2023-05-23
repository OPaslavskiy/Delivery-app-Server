const { Faina } = require("../../models/shops");

const { ctrlWrapper } = require("../../decorators");

const getAllGoods = async (req, res) => {
  const results = await Faina.find();
  res.json(results);
};

module.exports = {
  getAllGoods: ctrlWrapper(getAllGoods),
};
