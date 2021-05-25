const Router = require("express");
const router = new Router();
const findMiniServicesById = require("../controllers/findMiniServiceByIdController");

router.get("/miniService/:serviceId", findMiniServicesById);

module.exports = router;
