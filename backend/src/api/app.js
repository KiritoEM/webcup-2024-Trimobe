const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "../uploads/images")));
app.use("/files", express.static(path.join(__dirname, "../uploads/files")));
app.use("/videos", express.static(path.join(__dirname, "../uploads/videos")));


app.get("/api", (req, res) => {
  res.send("Hello World Trimobe!");
});

// TODO: 🚧 add routes

app.use("/api/tracas", require("./routes/tracasRoute"));
app.use("/api/angel", require("./routes/angelRoute"));
app.use("/api/auth", require("./routes/authRoute"));


module.exports = app;
