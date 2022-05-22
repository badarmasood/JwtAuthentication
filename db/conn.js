const mongoose = require("mongoose");
const DB =
  "mongodb+srv://badar:badar123@cluster0.n5lqe.mongodb.net/thapa?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfull with db");
  })
  .catch((err) => console.log("connection failed"));
