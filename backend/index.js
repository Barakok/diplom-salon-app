const express = require('express');
const config = require('config');
const authRouter = require('./routers/authRoutes');
const loadingListServicesRouters = require("./routers/loadingListServicesRouters");
const connectDB = require('./db');
const app = express();

app.use(express.json());
app.use('/', authRouter);
app.use('/', loadingListServicesRouters);

const PORT = config.get('serverPort');

connectDB();

app.listen(PORT, () => {
  console.log("Server started in port", PORT);
});

