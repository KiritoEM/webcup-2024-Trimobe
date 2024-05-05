// NOTE: ❕ import your socket.io file
const connectDatabase = require("./src/config/database.js");
const { server, PORT } = require("./src/server.js");

connectDatabase();

server.listen(PORT);
