const { Server } = require("socket.io");
const createSocket = (server) => {
  const webSocket = new Server(server);
  webSocket.on("connection", (socket) => {
    console.log("user  connected");
    socket.on("setLocation", (data) => {
      console.log(data);
    });
    socket.on("disconnect", () => {
      console.log("user disconnect");
    });
  });
};

module.exports = { createSocket };
