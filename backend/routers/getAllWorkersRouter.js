const Router = require("express");
const router = new Router();
const getAllWorkers = require("../controllers/workerController");

router.get("/workers/:serviceId", getAllWorkers);

module.exports = router;
