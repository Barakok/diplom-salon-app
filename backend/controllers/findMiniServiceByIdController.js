const expressAsyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

const findMiniServiceById = expressAsyncHandler(async (req, res) => {
  console.log("FUF", req.params.serviceId);
  const miniService = await Service.find({
    service: {
      $elemMatch: {
        miniService: { $elemMatch: { _id: req.params.serviceId } },
      },
    },
  });
  let serviceName = "";
  const findminiServiceName = miniService[0].service.find((item) =>
    item.miniService.find((miniservice) => {
      if (miniservice._id == req.params.serviceId) {
        serviceName = miniservice.name;
      }
    })
  );
  console.log(serviceName);
  if (!miniService) {
    return res.status(404).json({
      message: `Услуга не найдена`,
    });
  }
  return res.json({
    miniService: miniService,
  });
});

module.exports = findMiniServiceById;
