const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  Age: {
    type: String,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
