const express = require("express");

function makesConfig(app) {
  app.set("view engine", "hbs");
  app.use(express.urlencoded({ extended: false }));
}

module.exports = makesConfig;
