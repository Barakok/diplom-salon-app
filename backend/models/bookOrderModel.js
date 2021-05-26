const { Schema, model } = require("mongoose");
const bookOrderScheme = new Schema(
  {
    userId: Schema.Types.ObjectId,
    miniServiceId: Schema.Types.ObjectId,
    miniServiceName: { type: String, required: true },
    workerId: Schema.Types.ObjectId,
    workerName: { type: String, required: true },
    orderDate: { type: String, required: true },
    orderTime: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("BookOrder", bookOrderScheme);
