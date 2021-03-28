const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routers/auth.routes');
const app = express();

app.use(express.json());

app.use('/', authRouter);

const PORT = config.get('serverPort');
const CONNECTSTRING = config.get('dbConnect');

const start = async () => {
  try {
    await mongoose.connect(CONNECTSTRING,
      { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true});
    app.listen(PORT, () => {
      console.log("Server started in port", PORT);
    });
  }catch (e) {
    console.log(e.message);
  }
}

start();
