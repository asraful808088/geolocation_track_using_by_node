require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT;
const { createSocket } = require("./socket/socket");
createSocket(server);
app.use("/", express.static(path.join(__dirname, "static")));
app.get("/link", (req, res) => {
  res.json({
    link: "https://445f-103-126-13-169.ngrok.io",
  });
});
server.listen(PORT, (err) => {
  if (err) {
    console.log("server start failed");
  } else {
    console.log(`server start on ${PORT} port || http://localhost:${PORT}/`);
  }
});
