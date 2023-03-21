const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");
const cors = require("cors");
const authRouter = require("./routers/authRouter");
// const organizmeRouter = require("./routers/organizmeRouter");
// const formationRouter = require("./routers/formationRouter");
const ErrorHandler = require("./midellewares/ErrorHandler/ErrorHandler");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["*"],
  })
);

app.use(express.json());
app.use("/", authRouter);
// app.use("/organizme", organizmeRouter);
// app.use("/formation", formationRouter);
app.use(ErrorHandler);

module.exports = app;