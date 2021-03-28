const Router = require('express');
const User = require('../models/userModel');
const bCrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');


const router = new Router();

router.post("/login", async (req, res) => {
    try{
      const {email, password} = req.body;
      const userLog = await User.findOne({email});
      if(!userLog){
        return res.status(404).json({
          message: `Пользователь не найден`
        })
      }
      const isValidPassword = bCrypt.compareSync(password, userLog.password);
      if(!isValidPassword){
        return res.status(400).json({
          message: `Неверный пароль`
        })
      }

      const token = jwt.sign({id: userLog._id}, config.get('secretKey'), {expiresIn: '30d' });

      return res.json({
        token,
        user: {
          _id: userLog._id,
          name: userLog.name,
          email: userLog.email,
          isAdmin: userLog.isAdmin
      }
      });

    }catch (e) {
      console.log("Error");
    }
  });

router.post("/registration",
  [
    body('name', 'Неправильно имя').isLength({min: 2}),
    body('email', 'Неправильная почта').isEmail(),
    body('password', 'Пароль должен быть длиннее 4 символов и короче 12').isLength({min: 4, max: 12})
  ],
  async (req, res) => {
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        message: "Неправильный запрос", errors
      });
    }
    const {name, email, password} = req.body;
    const userAuth = await User.findOne({email});
    if(userAuth){
      return res.status(400).json({
        message: `Пользователь с email ${email} создан`
      })
    }

    const hashPassword = await bCrypt.hash(password, 5);
    const user = new User({name, email, password: hashPassword});
    await user.save();

    res.json({
      message: "Пользователь был создан"
    });

  }catch (e) {
    console.log("Error");
  }
});

module.exports = router;