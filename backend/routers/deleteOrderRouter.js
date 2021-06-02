const Router = require("express");
const router = new Router();
const deleteOrder = require("../controllers/deleteOrder");

router.get("/deleteOrder/:orderId", deleteOrder);

module.exports = router;
