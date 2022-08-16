const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    age: {
      type: String,
    },
  });

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;