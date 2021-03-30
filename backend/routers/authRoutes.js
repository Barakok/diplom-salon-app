const {loginUser, registrationUser} = require("../controllers/userController.js");
const Router = require('express');
const { body } = require('express-validator');
const router = new Router();

const validator = [
  body('name', 'Неправильно имя').isLength({min: 2}),
  body('email', 'Неправильная почта').isEmail(),
  body('password', 'Пароль должен быть длиннее 4 символов и короче 12').isLength({min: 4, max: 12})
];

router.route('/registration').post(validator, registrationUser);
router.post('/login', loginUser);




module.exports = router;