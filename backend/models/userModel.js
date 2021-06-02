const { Schema, model } = require("mongoose");

const userScheme = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    phoneТumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//const User = mongoose.model('User', userScheme);
module.exports = model("User", userScheme);
