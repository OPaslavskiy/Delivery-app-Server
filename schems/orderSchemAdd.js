const Joi = require("joi");

const orderSchemAdd = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.array()
    .items(
      Joi.object({
        titel: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    )
    .required()
    .min(1),
  totalPrice: Joi.number().required(),
});

module.exports = {
  orderSchemAdd,
};
