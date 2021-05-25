const generateToken = require("../utils/generateToken");
const expressAsyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const User = require("../models/userModel");
const bCrypt = require("bcrypt");

const loginUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: `Пользователь не найден`,
      });
    }

    const isValidPassword = bCrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: `Неверный пароль`,
      });
    }

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (e) {
    console.log("Error");
  }
});

const registrationUser = expressAsyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Неправильный запрос",
        errors,
      });
    }
    const { name, email, password } = req.body;
    const userAuth = await User.findOne({ email });
    if (userAuth) {
      return res.status(400).json({
        message: `Пользователь с email ${email} создан`,
      });
    }

    const hashPassword = await bCrypt.hash(password, 5);
    const user = await User.create({ name, email, password: hashPassword });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      message: "Пользователь был создан",
    });
  } catch (e) {
    console.log("Error");
  }
});

module.exports = { loginUser, registrationUser };
