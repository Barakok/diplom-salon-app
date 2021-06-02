const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const getOrdersRequest = expressAsyncHandler(async (req, res) => {
  //Добавить дату через две недели от текущей
  const date = new Date();
  const orders = await BookOrder.find({
    orderDate: { $gt: date },
    status: "Необработан",
  });
  return res.json(orders);
});

module.exports = getOrdersRequest;
