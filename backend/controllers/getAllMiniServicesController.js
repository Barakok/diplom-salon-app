const expressAsyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

const getAllMiniServices = expressAsyncHandler(async (req, res) => {
  let services = await Service.find();
  if (services) {
    return res.json(services);
  } else throw new Error("Сервис не найден");
});

module.exports = getAllMiniServices;
