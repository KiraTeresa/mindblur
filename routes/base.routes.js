const { Router } = require("express");

const baseRouter = Router();

baseRouter.use((req, res, next) => {
  console.log("REQUEST RECEIVED");
  // res.render("home");
  req.sucuk = "Sausage in turkish";
  next();
});

baseRouter.get("/", (req, res) => {
  // req.session.platypus =
  // "is it a fish? is it a mammal? is it a bird? dont know, dont care";
  console.log(req.session);
  console.log("req.sucuk:", req.sucuk);
  console.log("INSIDE THE BASE ROUTER GET ON HOME PAGE");
  res.render("home");
});

module.exports = baseRouter;
