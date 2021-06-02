const Router = require("express");
const router = new Router();
const changeOrder = require("../controllers/changeOrderController");

router.post("/changeOrder", changeOrder);

module.exports = router;
