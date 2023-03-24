require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const Login = async (req, res, next) => {
  try {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error("User Not Found");
      if (user) {
        const password_compare = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (password_compare) {
          const token = await jwt.sign(
            {
              name: user.name,
              email: user.email,
              role: user.role,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1800s" }
          );
          res.json({ message: "Login Success", token: token });
        } else {
          throw new Error("Password incorrect");
        }
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (err) {
    next(err);
  }
};

const Register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) throw new Error("This User Already Exist");
      if (!userExist) {
        const hash_password = await bcrypt.hash(req.body.password, salt);
        if (hash_password) {
          const createUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash_password,
          });
          if (createUser) {
            const userSaved = await createUser.save();
            if (userSaved) {
              res.send("User Created Success");
            }
          }
        } else {
          throw new Error("Something Went Wrong in Password");
        }
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { Login, Register };
