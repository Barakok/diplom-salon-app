const allServices = require("./data/allServices");
const Service = require("./models/serviceModel");
const connectDB = require("./db");

connectDB();

const importData = async () => {
  try {
    await Service.deleteMany();
    await Service.insertMany(allServices);
  } catch (e) {
    console.log("Error", e.message);
  }
};

importData();
