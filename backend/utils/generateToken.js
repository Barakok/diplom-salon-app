const jwt = require("jsonwebtoken");
const config = require('config');

const generateToken = (id) => jwt.sign({id}, config.get('secretKey'), {expiresIn: '30d' });

module.exports = generateToken;