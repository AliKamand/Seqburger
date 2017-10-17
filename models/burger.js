var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

burger.sync();

module.exports = burger;