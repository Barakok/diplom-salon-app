const Router = require("express");
const addOrderController = require("../controllers/addOrderController.js");
const router = new Router();
router.post("/addOrder", addOrderController);

module.exports = router;
