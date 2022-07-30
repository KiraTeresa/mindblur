const express = require("express");

require("./db");

const app = express();

require("./config")(app);

// middleware

// /book/123
const baseRouter = require("./routes/base.routes");
app.use("/", baseRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const bookRouter = require("./routes/book.routes");
app.use("/book", bookRouter);

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

// CREATE BOOK

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
