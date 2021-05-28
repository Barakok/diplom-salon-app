const jwt = require("jsonwebtoken");
const config = require("config");

const generateToken = (user) =>
  jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.get("secretKey"),
    { expiresIn: "30d" }
  );

module.exports = generateToken;
