const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  birthDay: {
    type: String,
    require: true,
  },
  Age: {
    type: Number,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
