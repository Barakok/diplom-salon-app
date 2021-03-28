const {Schema, model} = require('mongoose');

const bookOrderScheme = new Schema({
    name: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    serviceItems: [{
      name: {type: String, required: true},
      price: {type: Number, required: true},
      orderTime: {type: Date, required: true},
      service: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Service"}
    }]
  },
  {
    timestamps: true
  });

module.exports = model('BookOrder', bookOrderScheme);