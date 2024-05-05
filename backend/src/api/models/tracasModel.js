const { Schema, model } = require("mongoose");

const tracasSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    enum: ["course", "menage"],
    require: true
  },
  description: {
    type: String,
    trim: true,
    unique: true,
  },
}, {
  timestamps: true,
})

const tracasModel = model("Tracas", tracasSchema);

module.exports = tracasModel;