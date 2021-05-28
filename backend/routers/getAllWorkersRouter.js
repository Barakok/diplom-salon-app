const Router = require("express");
const router = new Router();
const {
  getAllWorkersForOneService,
  getAllWorkers,
} = require("../controllers/workerController");

router.get("/workers", getAllWorkers);
router.get("/workers/:serviceId", getAllWorkersForOneService);

module.exports = router;
