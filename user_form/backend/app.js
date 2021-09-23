const express = require("express");
const cors = require("cors");
const passport = require("passport");
var app = express();

require("dotenv").config();
require("./config/database");
require("./models/users");
require("./models/todo");
require("./config/passport")(passport);

app.use(errorHandler);
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(require("./routes"));

function errorHandler(err, req, res, next) {
  next(err);
}

app.listen(4000);
