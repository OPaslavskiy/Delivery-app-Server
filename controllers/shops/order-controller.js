const { Order } = require("../../models/shops");

const { ctrlWrapper } = require("../../decorators");

const addOrder = async (req, res) => {
  const results = await Order.create(req.body);
  res.status(201).json(results);
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
