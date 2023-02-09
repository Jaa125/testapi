const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

//REGISTER
router.post("/register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneNumber: req.body.phoneNumber,
        cin: req.body.cin,
        region:req.body.region,
        email: req.body.email,
        password: hashedPass,
      });
  
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//login user
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
      !user && res.status(400).json("Wrong credentials! pls check your name");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials! pls check your password");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router