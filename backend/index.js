const express = require("express");
const config = require("config");
const authRouter = require("./routers/authRoutes");
const loadingListServicesRouters = require("./routers/loadingListServicesRouters");
const loadingOrderRouter = require("./routers/loadingOrdersRouter");
const connectDB = require("./db");
const addOrderRouter = require("./routers/addOrderRouter");
const findMiniServiceById = require("./routers/findMiniServiceByIdRouter");
const getAllWorkers = require("./routers/getAllWorkersRouter");
const findOrderByDateRouter = require("./routers/findOrderByDateRouter");
const app = express();

app.use(express.json());
app.use("/", authRouter);
app.use("/", loadingListServicesRouters);
app.use("/", addOrderRouter);
app.use("/", loadingOrderRouter);
app.use("/", findMiniServiceById);
app.use("/", getAllWorkers);
app.use("/", findOrderByDateRouter);

const PORT = config.get("serverPort");

connectDB();

app.listen(PORT, () => {
  console.log("Server started in port", PORT);
});
