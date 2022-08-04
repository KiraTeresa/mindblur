const { Router } = require("express");
const isLoggedIn = require("../middleware/isLoggedIn.middleware");

const UserModel = require("../models/User.model");

const settingsRouter = Router();

settingsRouter.get("/", isLoggedIn, (req, res) => {
  res.render("settings/home");
});

// GET /settings/update-user
settingsRouter.get("/update-user", isLoggedIn, (req, res) => {
  console.log("Your Session: ", req.session.userId);

  UserModel.findById(req.session.userId)
    .then((user) => {
      console.log("USER FOUND: ", user);
      if (!user) {
        return res.redirect("/");
      }
      res.render("settings/update-user", { user });
    })
    .catch((err) => console.log("Error when about to update username", err));
});

// POST /settings/update-user
settingsRouter.post("/update-user", isLoggedIn, (req, res) => {
  const { username = "", email = "" } = req.body;
  // console.log("Here is your req body: ", req.body);

  if (username.length < 4) {
    return res.status(400).render("auth/register", {
      usernameError: "Please choose something with more than 4 characters",
      ...req.body,
    });
  }

  if (!email.includes("@")) {
    return res.status(400).render("auth/register", {
      emailError:
        "Please add, at the very least an @ symbol. We dont ask for THAT much",
      ...req.body,
    });
  }

  const userArr = UserModel.findOne({ $or: [{ username }, { email }] });

  if (!userArr) {
    UserModel.findByIdAndUpdate(req.session.userId, { username, email });
    return res.redirect("/settings");
  }
});

// GET /settings/update-password
settingsRouter.get("/update-password", isLoggedIn, (req, res) => {
  UserModel.findById(req.session.userId)
    .then((user) => {
      res.render("settings/update-pw", { user });
    })
    .catch((err) => console.log("Error when about to update username", err));
});

// POST /settings/update-password

module.exports = settingsRouter;
