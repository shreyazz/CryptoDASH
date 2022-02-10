const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

router.post("/", verifyToken, (req, res) => {
  const token = req.token;
  jwt.verify(token, "secretCode", (err, user) => {
    if (err) {
      res
        .status(403)
        .json({ error: "some error occured in /getFavCryptos 🔴" });
    } else {
      res.json(user);
      //   const userFromDB = User.findOne({ email: user.email });
      //   if (userFromDB) {
      //   res.json(userFromDB.favCryptos);
      //   }
    }
  });
});

// Verify Token
function verifyToken(req, res, next) {
  // Get header value of auth
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Bearer <jwt_token>
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    res.status(403).json({ error: "Error in verifyToken Middleware" });
  }
}

// middleware for userAuth

module.exports = router;
