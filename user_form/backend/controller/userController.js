const utils = require("../lib/utils");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const passport = require("passport");
const { check, validationResult } = require("express-validator");

exports.registerValidate = [
  check("username", "Username Must have minimum 6 letters").isLength({
    min: 6,
  }),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password Must Be at Least 8 Characters")
    .matches("[0-9]")
    .withMessage("Password Must Contain a Number")
    .matches("[A-Z]")
    .withMessage("Password Must Contain an Uppercase Letter"),
  check("phNo")
    .isLength({ min: 10, max: 10 })
    .withMessage("Enter valid Phone Number")
    .matches("[0-9]")
    .withMessage("Phone Number Must Contain  Number"),
  check("email").isEmail().withMessage("Enter Email").normalizeEmail(),
];

exports.userLogin = async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      // check if username is present
      if (!user) {
        res.status(401).json({
          success: false,
          msg: "could not find the user",
        });
      }

      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );
      //confirming password
      if (isValid) {
        const tokenObject = utils.issueJWT(user);
        res.status(200).json({
          success: true,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "you entered wrong password" });
      }
    })
    .catch((error) => next(error));
};
exports.userRegistration = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    const saltHash = utils.genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
      username: req.body.username,
      hash: hash,
      salt: salt,
      phNo: req.body.phNo,
      email: req.body.email,
      gender: req.body.gender,
    });
    newUser
      .save()
      .then((user) => {
        const jwt = utils.issueJWT(user);
        res.json({
          success: true,
          user: user,
          token: jwt.token,
          expiresIn: jwt.expires,
        });
      })
      .catch((err) => next(err));
  }
};
