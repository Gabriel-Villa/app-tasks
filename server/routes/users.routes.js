const { Router } = require("express");
const router = Router();
const {
  loginPage,
  registerPage,
  logUser,
  singupUser,
  logOut,
} = require("../controllers/users.controller");

router.get("/login", loginPage);
router.post("/login", logUser);

router.get("/register", registerPage);
router.post("/register", singupUser);

router.get("/logout", logOut);

module.exports = router;
