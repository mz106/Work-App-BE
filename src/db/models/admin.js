const { DataTypes } = require("sequelize");
const databaseConnection = require("../connection");

const Admin = databaseConnection.define("Admin", {
  adminname: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = Admin;
