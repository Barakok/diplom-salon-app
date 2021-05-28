const BookOrder = require("../models/bookOrderModel.js");
const expressAsyncHandler = require("express-async-handler");

const findOrdersByDate = expressAsyncHandler(async (req, res) => {
  const date =
    req.query.orderDate.toString().substr(0, 3) +
    " " +
    req.query.orderDate.toString().substr(3, 2) +
    " " +
    req.query.orderDate.toString().substr(5, 4);
  const orders = await BookOrder.find({
    orderDate: date,
    workerId: req.query.workerId,
  });

  return res.json(orders);
});

module.exports = findOrdersByDate;
