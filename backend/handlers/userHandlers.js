const users = {
  1: { username: "Alice", online: false },
  2: { username: "Bob", online: false },
};

const userHandler = (io, socket) => {
  const getUsers = () => {
    io.in(socket.roomId).emit("users", users);
  };

  const addUser = ({ username, userId }) => {
    if (!users[userId]) {
      users[userId] = { username, online: true };
    } else {
      users[userId].online = true;
    }
    getUsers();
  };

  socket.on("user:get", getUsers);
  socket.on("user:add", addUser);
};

module.exports = userHandler;
