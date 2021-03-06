const expressAsyncHandler = require("express-async-handler");
const Workers = require("../models/workerModel");

const getAllWorkersForOneService = expressAsyncHandler(async (req, res) => {
  const workers = await Workers.find({ serviceId: req.params.serviceId });
  if (workers) {
    return res.json(workers);
  } else throw new Error("Сервис не найден");
});

const getAllWorkers = expressAsyncHandler(async (req, res) => {
  const workers = await Workers.find();
  if (workers) {
    return res.json(workers);
  } else throw new Error("Сервис не найден");
});

module.exports = { getAllWorkersForOneService, getAllWorkers };
