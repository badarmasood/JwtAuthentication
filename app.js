var express = require('express');
const router = express.Router();
var app = express();
const mongoose = require("mongoose");

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"));

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
module.exports = app;
