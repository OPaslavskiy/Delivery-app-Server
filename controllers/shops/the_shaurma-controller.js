const { TheShaurma } = require("../../models/shops");

const { ctrlWrapper } = require("../../decorators");

const getAllGoods = async (req, res) => {
  const results = await TheShaurma.find();
  res.json(results);
};

module.exports = {
  getAllGoods: ctrlWrapper(getAllGoods),
};
