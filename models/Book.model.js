const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  publisher: {
    type: String,
  },
  nsfw: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  year: {
    type: Number,
  },
  stock: {
    type: Number,
    default: 4,
  },
  //   genre: We look into this whenever we add relationships
  // if we have time: ratings
});

const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;
