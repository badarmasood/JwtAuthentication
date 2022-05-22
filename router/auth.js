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
});
router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  // console.log("data from front end",data)
  
  try {
    const userExist = await userEtijarat.findOne({ email: email });
    if (userExist) {
      return res.status(420).json({ error: "User already exits" });
    } else if (password != cpassword) {
      return res.status(420).json({ error: "password don't match" });
    }else{

    
    const user = new userEtijarat({ name:name, email:email, password:password, cpassword:cpassword });
    await user.save();
    res.status(201).json({ message: "user registered successfuly" });
  } }catch (err) {
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
