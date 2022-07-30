const { Router } = require("express");
const BookModel = require("../models/Book.model");

const bookRouter = Router();

bookRouter.get("/add", (req, res) => {
  res.render("book/add-book");
});

bookRouter.post("/add", (req, res) => {
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

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;

  BookModel.findById(bookId).then((book) => {
    res.render("book/single-book", { book });
  });
});

module.exports = bookRouter;
