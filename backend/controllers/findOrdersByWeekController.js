const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const findOrdersByWeek = expressAsyncHandler(async (req, res) => {
  const { _id } = req.body;
  //Добавить дату через две недели от текущей
  const date = new Date();
  const orders = await BookOrder.find({
    orderDate: { $gt: date },
    workerId: _id,
    status: "Неоплачен",
  });
  return res.json(orders);
});

module.exports = findOrdersByWeek;
