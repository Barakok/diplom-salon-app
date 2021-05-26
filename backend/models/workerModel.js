const { Schema, model } = require("mongoose");
const workersSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    position: { type: String, required: true },
    serviceId: Schema.Types.ObjectId,
    image: { type: String, required: true },
    discription: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Workers", workersSchema);
