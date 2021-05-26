const Router = require("express");
const router = new Router();
const findOrdersByDate = require("../controllers/findOrderByDateController");

router.get("/orderByDate", findOrdersByDate);

module.exports = router;
