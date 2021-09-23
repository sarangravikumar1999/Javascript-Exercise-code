const passport = require("passport");

const router = require("express").Router();

router.use("/api/users", require("./users"));
router.use(
  "/api/todos",
  passport.authenticate("jwt", { session: false }),
  require("./todos")
);
module.exports = router;
