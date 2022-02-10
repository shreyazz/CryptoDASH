const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    // TODO: checking email using regex or we can use a library: express-validator

    if (!email || !password) {
      return res.status(422).json({ error: "please fill out all the details" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ error: "User is not registered" });
    }

    const isPassMatching = await bcrypt.compare(password, user.password);
    if (!isPassMatching) {
      return res.json({ error: "Please input valid credentials " });
    }

    const token = jwt.sign({ user: user }, "secretCode");
    res.json({
      message: "user is logged in 🟢",
      info: {
        email: email,
        favCrytos: user.favCryptos,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Some error occured 🔴" });
  }
});
;

module.exports = router;
