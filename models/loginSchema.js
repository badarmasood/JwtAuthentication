const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  naam: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
});

const loginuser = mongoose.model("userLogin", loginSchema);

module.exports = loginuser;
