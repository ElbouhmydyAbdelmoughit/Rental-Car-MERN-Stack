const authRouter = require("express").Router();
const { Login, Register, getAll } = require("../controllers/authController");
const { check } = require("express-validator");

authRouter.get("/getAll", getAll);
authRouter.post(
  "/login",
  [
    check("email", "Email is Requered").trim().notEmpty().isEmail(),
    check("password", "Password is required").trim().notEmpty().escape(),
  ],
  Login
);
authRouter.post(
  "/register",
  [
    check("name", "Name is Requered").trim().notEmpty(),
    check("email", "Email is Requered").trim().notEmpty().isEmail(),
    check("password", "Paswword is Requered")
      .trim()
      .notEmpty()
      .isLength({ min: 5, max: 12 }),
  ],
  Register
);

module.exports = authRouter;
