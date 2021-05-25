const Router = require("express");
const router = new Router();
const getOrders = require("../controllers/loadingOrdersController");

router.get("/loadingOrders/:userId", getOrders);

module.exports = router;
