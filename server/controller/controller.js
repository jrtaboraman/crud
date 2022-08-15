const getAge = require("findage");
const { request } = require("express");
var Userdb = require("../model/model");

// create and save new user

exports.create = (req, res) => {
  let isoDate = req.body.birthDay;

  // new user
  const user = new Userdb({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDay: req.body.birthDay,
    Age: getAge.fullAge(isoDate.substring(0, 10)),
  });
  //   console.log(birthDay);

  /**
   * Date from day / month / year
   *
   * @param day    The day of the date
   * @param month  The month of the date
   * @param year   The year of the date
   */

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};
// retrieve and return users/single user
exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retrieving user information",
      });
    });
};

// Update a new identified user by user id

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }
  const id = req.params.id;
};

// Delete a user with specified user id
exports.delete = (req, res) => {};
