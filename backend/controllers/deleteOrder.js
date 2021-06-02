const expressAsyncHandler = require("express-async-handler");
const BookOrder = require("../models/bookOrderModel.js");

const deleteOrder = expressAsyncHandler(async (req, res) => {
  let order = await BookOrder.findByIdAndDelete(req.params.orderId);
  if (order) {
    return res.json(order);
  } else throw new Error("Сервис не найден");
});

module.exports = deleteOrder;
