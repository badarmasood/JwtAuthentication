var express = require("express");
const router = express.Router();
require("../db/conn");

const userEtijarat = require("../models/userSchema");
const loginuser = require("../models/loginSchema");


router.get("/", (req, res) => {
  res.send("Hello from the Home  server router");

});
router.get("/signin", (req, res) => {
  res.send("Hello signin from the server ");
});


router.get("/signup", (req, res) => {
  res.send("Hello signup from the server Badar");
  // console.log(req.body);
  // const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
  // const data = JSON.parse(req.body);
  // console.log(obj);
  // res.send(req.body);
  // const { name, email, phone, work, password, cpassword } = req.body;
});
router.post("/signup", async (req, res) => {
  console.log(req.body)
  const { name, email, password, cpassword } = req.body;
  try {
    const user = new userEtijarat({ name, email, password, cpassword });
    await user.save();
    res.status(201).json({ message: "user registered successfuly" });
  } catch (err) {
    console.log(err);
  }
});

// router.post("/signup", async (req, res) => {
//     const { name, email,password, cpassword } = req.body;
//     try {
//       const user = new userEtijarat({ name, email, password, cpassword });
//       await user.save();
//       res.status(201).json({ message: "user registered successfuly" });
//     } catch (err) {
//       console.log(err);
//     }
//   });
 


module.exports = router;
