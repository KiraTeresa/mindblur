const express = require("express");

const app = express();

require("./config")(app);

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
