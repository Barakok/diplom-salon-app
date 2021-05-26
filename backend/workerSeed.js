const allWorkers = require("./data/allWorkers");
const Workers = require("./models/workerModel");
const connectDB = require("./db");

connectDB();

const importData = async () => {
  try {
    await Workers.deleteMany();
    await Workers.insertMany(allWorkers);
  } catch (e) {
    console.log("Error", e.message);
  }
};

importData();
