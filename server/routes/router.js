const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);
/**
 * @description Add user
 * @method GET / Add user
 */

route.get("/add-user", services.addUser);

/**
 * @description update user
 * @method GET / Update user
 */
route.get("/update-user", services.updateUser);

// API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
