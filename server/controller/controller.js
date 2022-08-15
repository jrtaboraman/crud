const { request } = require("express");
var Userdb = require("../model/model");

// create and save new user

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  // new user
  const user = new Userdb({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDay: req.body.birthDay,
    Age: age(birthDate),
  });
};
// retrieve and return users/single user
exports.find = (req, res) => {};

// Update a new identified user by user id

exports.update = (req, res) => {};

// Delete a user with specified user id
exports.delete = (req, res) => {};

/**
 * Date from day / month / year
 *
 * @param day    The day of the date
 * @param month  The month of the date
 * @param year   The year of the date
 */
function dateFromDayMonthYear(day, month, year) {
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}

/**
 * Get the years from now
 *
 * @param date  The date to get the years from now
 */
function yearsFromNow(date) {
  return (new Date() - date) / 1000 / 60 / 60 / 24 / 365;
}

/**
 * Gets the age of a person
 *
 * @param birthDate  The date when the person was born
 */
function age(birthDate) {
  return Math.floor(yearsFromNow(birthDate));
}
