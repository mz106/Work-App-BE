const express = require("express");
const { admin } = require("./api/");
const { Admin } = require("./db/models");

module.exports = async (app) => {
  app.use(express.json());
  Admin.sync();
  admin(app);
};
