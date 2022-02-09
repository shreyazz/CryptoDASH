const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
router.post("/", async (req, res) => {
  const { email, password, favCryptos } = req.body;
  try {
    // TODO: checking email using regex or we can use a library: express-validator
    if (!email || !password || favCryptos.length !== 3) {
      return res.status(422).json({ error: "please fill out all the details" });
    }

    // checking if user already registered
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "email is already registered" });
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 12);

    // if the user is not already registered then, we will create
    user = await User.create({
      email: email,
      password: hashedPassword,
      favCryptos: favCryptos,
    });
    res.json({ message: "user is registered 🟢" });
  } catch (err) {
    res.status(500).json({ error: "Some error occured 🔴" });
  }
});

module.exports = router;
