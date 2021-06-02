const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const getUserById = expressAsyncHandler(async (req, res) => {
  let user = await User.findById(req.params.userId);
  if (user) {
    return res.json(user);
  } else throw new Error("Пользователь не найден");
});

module.exports = getUserById;
