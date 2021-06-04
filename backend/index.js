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
const findOrderByWeekRouter = require("./routers/findOrdersByWeekRouter");
const getAllMiniServicesRouter = require("./routers/getAllMiniServicesRouter");
const findMiniServicesByName = require("./routers/findMiniServiceByNameRouter");
const getUserInfoById = require("./routers/getUserByIdRouter");
const changeOrder = require("./routers/changeOrderRouter");
const deleteOrder = require("./routers/deleteOrderRouter");
const getOrdersRequest = require("./routers/getOrdersRequestRouter");
const { join } = require("path");
const app = express();

const registerMessageHendlers = require("./handlers/messageHandlers");
const registerUserHendlers = require("./handlers/userHandlers");
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const onConnection = (socket) => {
  console.log("User Connection");

  const { roomId } = socket.handshake.query;

  socket.roomId = roomId;

  socket.join(roomId);

  registerMessageHendlers(io, socket);
  registerUserHendlers(io, socket);

  socket.on("disconnect", () => {
    console.log("User disconnected");
    socket.leave(roomId);
  });
};

io.on("connection", onConnection);

app.use(express.json());
app.use("/", authRouter);
app.use("/", loadingListServicesRouters);
app.use("/", addOrderRouter);
app.use("/", loadingOrderRouter);
app.use("/", findMiniServiceById);
app.use("/", getAllWorkers);
app.use("/", findOrderByDateRouter);
app.use("/", findOrderByWeekRouter);
app.use("/", getAllMiniServicesRouter);
app.use("/", findMiniServicesByName);
app.use("/", getUserInfoById);
app.use("/", changeOrder);
app.use("/", deleteOrder);
app.use("/", getOrdersRequest);

const PORT = config.get("serverPort");

connectDB();

server.listen(PORT, () => {
  console.log("Server started in port", PORT);
});
