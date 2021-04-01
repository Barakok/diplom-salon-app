const mongoose = require('mongoose');
const config = require('config');
const CONNECTSTRING = config.get('dbConnect');

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTSTRING,
      { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true});
    console.log("Подключение к БД прошло успешно");
  }catch (e){
    console.error(e.message);
    process.exit(1);
  }
}


module.exports = connectDB;
