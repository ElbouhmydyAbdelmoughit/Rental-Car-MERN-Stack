const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("Car", carSchema);
