const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const addOrder = expressAsyncHandler(async (req, res) => {
  try {
    const {
      userId,
      miniServiceId,
      miniServiceName,
      workerId,
      workerName,
      orderDate,
      orderTime,
      status,
    } = req.body;
    const bookOrder = await BookOrder.create({
      userId,
      miniServiceId,
      miniServiceName,
      workerId,
      workerName,
      orderDate,
      orderTime,
      status,
    });

    return res.json({
      _id: bookOrder._id,
      userId: bookOrder.userId,
      miniServiceId: bookOrder.miniServiceId,
      miniServiceName: bookOrder.miniServiceName,
      workerId: bookOrder.workerId,
      workerName: bookOrder.workerName,
      orderDate: bookOrder.orderDate,
      orderTime: bookOrder.orderTime,
      status: bookOrder.status,
    });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = addOrder;
