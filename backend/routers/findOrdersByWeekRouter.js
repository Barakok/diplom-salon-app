const Router = require("express");
const router = new Router();
const findOrdersByWeek = require("../controllers/findOrdersByWeekController");

router.post("/ordersByWeek", findOrdersByWeek);

module.exports = router;
