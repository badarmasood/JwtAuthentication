var express = require('express');
const router = express.Router();
var app = express();
const mongoose = require("mongoose");

require("./db/conn");
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(require("./router/auth"));

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
module.exports = app;
