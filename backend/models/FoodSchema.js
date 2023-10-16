const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const FoodModel = model("Foods", foodSchema, "chinese");

module.exports = FoodModel;
