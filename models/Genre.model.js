const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  //   books: We look into this whenever we add relationships
});

const GenreModel = mongoose.model("genre", GenreSchema);

module.exports = GenreModel;
