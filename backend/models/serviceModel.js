const {Schema, model} = require('mongoose');

const allServiceScheme = new Schema({
  name: {type: String, required: true},
  service:
    [{
    serviceName: {type: String, required: true},
    miniService:
      [{
      name: {type: String, required: true},
      description: {type: String, required: true},
      duration: {type: Number, required: true, default: 0},
      price: {type: Number, required: true, default: 0}
    }]
  }]
  },
  {
    timestamps: true
  });

module.exports = model('Service', allServiceScheme);