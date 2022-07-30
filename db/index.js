const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/mindblur";
// falsy && string -> false
// truthy && string -> string
// falsy || string -> string
// truthy || string -> truthy

mongoose.connect(MONGO_URL).then((connection) => {
  console.log(
    `Connected to Mongo!! Database name is "${connection.connections[0].name}"`
  );
});
