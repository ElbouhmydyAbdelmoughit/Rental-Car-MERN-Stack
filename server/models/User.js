const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "client",
  },
});

module.exports = mongoose.model("User", userShema);