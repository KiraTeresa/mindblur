const express = require("express");
const logger = require("morgan");

function makesConfig(app) {
  app.set("view engine", "hbs");
  app.use(express.urlencoded({ extended: false }));
  app.use(logger("dev"));
}

module.exports = makesConfig;
