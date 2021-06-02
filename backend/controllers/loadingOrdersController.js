const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const getOrders = expressAsyncHandler(async (req, res) => {
  const orders = await BookOrder.find({
    userId: req.params.userId,
    status: "Неоплачен",
  });

  if (orders) {
    return res.json(orders);
  } else throw new Error("Сервис не найден");
});

module.exports = getOrders;
