const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const changeOrder = expressAsyncHandler(async (req, res) => {
  try {
    const {
      _id,
      serviceName,
      miniServiceId,
      orderDate,
      orderTime,
      status,
      workerName,
      workerId,
    } = req.body;
    const order = await BookOrder.findByIdAndUpdate(_id, {
      $set: {
        miniServiceId: miniServiceId,
        miniServiceName: serviceName,
        workerId: workerId,
        workerName: workerName,
        orderDate: orderDate,
        orderTime: orderTime,
        status: status,
      },
    });

    if (!order) {
      return res.status(404).json({
        message: `Пользователь не найден`,
      });
    }

    return res.json({
      miniServiceId: miniServiceId,
      miniServiceName: serviceName,
      workerId: workerId,
      workerName: workerName,
      orderDate: orderDate,
      orderTime: orderTime,
      status: status,
    });
  } catch (e) {
    console.log("Error");
  }
});

module.exports = changeOrder;
