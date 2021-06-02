const Router = require("express");
const router = new Router();
const findMiniServicesByName = require("../controllers/findMiniServiceByNameController");

router.get("/miniServiceByName/:serviceName", findMiniServicesByName);

module.exports = router;
