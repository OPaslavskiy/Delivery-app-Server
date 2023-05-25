const Joi = require("joi");

const orderSchemAdd = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.array()
    .items(
      Joi.object({
        // _id: Joi.string().required(),
        titel: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().uri().required(),
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
