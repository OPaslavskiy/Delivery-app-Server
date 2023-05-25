const { Schema, model } = require("mongoose");

const shopsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const orderItemSchema = new Schema({
  titel: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      required: true,
    },
    phone: {
      type: String,
      match: /^[\d()+\- ]+$/,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    order: [orderItemSchema],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);
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
  Order,
};
