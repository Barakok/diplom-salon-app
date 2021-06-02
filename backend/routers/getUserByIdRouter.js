const Router = require("express");
const router = new Router();
const getUserById = require("../controllers/getUserInfoByIdController");

router.get("/user/:userId", getUserById);

module.exports = router;
