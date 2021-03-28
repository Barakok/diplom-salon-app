const {Schema, model} = require('mongoose');

const serviceScheme = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true, default: 0},
    price: {type: Number, required: true, default: 0},
    filters: [String]
  },
  {
    timestamps: true
  });

module.exports = model('Service', serviceScheme);