const { check } = require("express-validator");
const authRouter = require("express").Router();
const { Login, Register, getAll, remove } = require("../controllers/authController");

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

authRouter.delete('/delete/:id',remove)

module.exports = authRouter;
