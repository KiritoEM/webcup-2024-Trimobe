// import { connect } from "mongoose";
const { connect } = require("mongoose");
// export default function connectDatabase() {
module.exports = function connectDatabase() {
  try {
    // FIXME: 🚨 Add MONGODB_URI_ONLINE "MongoDB connection" to yout environment variable
    connect(process.env.MONGODB_URI_ONLINE);
    console.log(" ✅ Database connected successfully");
  } catch (error) {
    console.log(" 🛑 Error connecting to database", error);
  }
};
