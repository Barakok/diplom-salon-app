const Router = require("express");
const router = new Router();
const getAllMiniServices = require("../controllers/getAllMiniServicesController");

router.route("/miniServices").get(getAllMiniServices);

module.exports = router;
