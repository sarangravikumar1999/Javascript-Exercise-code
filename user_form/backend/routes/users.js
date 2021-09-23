const router = require("express").Router();
const passport = require("passport");
const userController = require("../controller/userController");


router.post("/login", userController.userLogin);

router.post(
  "/register",
  userController.registerValidate,
  userController.userRegistration
);

module.exports = router;
