const expressAsyncHandler = require("express-async-handler");
const Service = require('../models/serviceModel');

// const getServices = expressAsyncHandler(async (req,res) => {
//   try{
//     const services = await Service.find({});
//     return res.json(services);
//   }catch (e) {
//     throw new Error("Сервисы не загружены");
//   }
// });

const getServicesById = expressAsyncHandler(async (req,res) => {
    const service = await Service.findById(req.params.id);
    console.log(service);
    if(service){
      return res.json(service);
    }else throw new Error("Сервис не найден");

});

//module.exports = getServices;
module.exports =  getServicesById;