const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("task", "root", "senai", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;