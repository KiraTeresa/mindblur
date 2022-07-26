const express = require("express");
const BookModel = require("./models/Book.model");

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/mindblur";

mongoose.connect(MONGO_URL).then((connection) => {
  console.log(
    `Connected to Mongo!! Database name is "${connection.connections[0].name}"`
  );
});

const app = express();

require("./config")(app);

app.get("/", (req, res) => {
  res.render("home");
});

// CREATE BOOK
app.get("/book/add", (req, res) => {
  res.render("book/add-book");
});

app.post("/book/add", (req, res) => {
  const { title, description, authors, publisher, genre, nsfw, year } =
    req.body;

  const authorArray = authors.split(",").map((author) => author.trim());

  BookModel.create({
    title,
    authors: authorArray,
    publisher,
    nsfw,
    year,
    description,
    // genre,
  })
    .then((createdBook) => {
      res.render("book/add-book", { createdBook });
    })
    .catch((err) => {
      console.log("Oopsie", err);
      // TODO: Do better error handling
      res.redirect("/");
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
