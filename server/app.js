const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
const carRouter = require("./routers/carRouter");
const ErrorHandler = require("./midellewares/ErrorHandler/ErrorHandler");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["*"],
  })
);

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("/auth", authRouter);
app.use("/car", carRouter);
app.use(ErrorHandler);

module.exports = app;