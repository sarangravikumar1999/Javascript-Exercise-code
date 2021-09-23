const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  salt: String,
  hash: String,
  phNo: Number,
  email: String,
  gender: String,
});
mongoose.model("User", UserSchema);
