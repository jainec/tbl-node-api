require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("mysql://root:root@127.0.0.1:3306/tbl");

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;
