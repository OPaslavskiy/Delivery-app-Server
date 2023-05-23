const { Schema, model } = require("mongoose");
// const Joi = require("joi");

// const hendleMongooseError = require("../helpers/handleMongooseError");

const shopsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// contactSchema.post("save", hendleMongooseError);

// const contactAddSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string()
//     .required()
//     .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
//   phone: Joi.string()
//     .required()
//     .pattern(/^[\d()+\- ]+$/),
//   favorite: Joi.boolean(),
// });

// const updateFavoriteSchema = Joi.object({
//   favorite: Joi.boolean().required(),
// });

const Elari = model("elari_caffe-good", shopsSchema);
const Faina = model("faina_pizza-good", shopsSchema);
const McDuck = model("mc_duck-good", shopsSchema);
const SushiAbw = model("sushi_abw-good", shopsSchema);
const TheShaurma = model("the_shaurma-good", shopsSchema);

module.exports = {
  Elari,
  Faina,
  McDuck,
  SushiAbw,
  TheShaurma,
};
