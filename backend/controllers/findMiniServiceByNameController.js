const expressAsyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

const findMiniServiceByName = expressAsyncHandler(async (req, res) => {
  const miniService = await Service.find({
    service: {
      $elemMatch: {
        miniService: { $elemMatch: { name: req.params.serviceName } },
      },
    },
  });
  let serviceName = "";
  const findminiServiceName = miniService[0].service.find((item) =>
    item.miniService.find((miniservice) => {
      if (miniservice.name == req.params.serviceName) {
        serviceName = miniservice.name;
      }
    })
  );
  if (!miniService) {
    return res.status(404).json({
      message: `Услуга не найдена`,
    });
  }
  return res.json({
    serviceId: miniService[0]._id,
  });
});

module.exports = findMiniServiceByName;
