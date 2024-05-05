const http = require("http");
const app = require("./api/app.js");

// FIXME: 🚨 Add PORT "Port connection" to yout environment variable
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const address = server.address();
const bind = typeof address === "string" ? `pipe ${address}` : `port ${PORT}`;

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  switch (error.code) {
    case "EACCES":
      console.error(` 🛑 ${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(` 🛑 ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const listeningHandler = () => {
  // NOTE: ❕ add your custom task when server is running
  console.log(` ✅ Server is running on ${bind}`);
}

// NOTE: ❕ add your connection and namespace for socket.io

server.on("error", errorHandler);
server.on("listening", listeningHandler);

module.exports = {
  server,
  PORT
};