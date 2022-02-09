const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
  favCryptos: [],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
