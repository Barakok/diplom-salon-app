const Router = require("express");
const router = new Router();
const getOrdersRequest = require("../controllers/getOrdersRequestController");

router.get("/ordersRequest", getOrdersRequest);

module.exports = router;
