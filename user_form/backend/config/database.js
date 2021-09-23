const mongoose = require("mongoose");

require("dotenv").config();

const url = process.env.DB_STRING;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Database connected");
});
