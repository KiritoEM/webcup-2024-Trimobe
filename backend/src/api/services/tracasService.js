const tracasModel = require("../models/tracasModel");

class TracasService {
  constructor(model) {
    this.Tracas = model;
  }

  async createNewTracas(name, category, description) {
    try {
      const newTracas = new this.Tracas({
        name,
        category,
        description
      });
      return await newTracas.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getOneTracas(name) {
    try {
      return await this.Tracas.findOne({ name: { $regex: name, $options: 'i' } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllTracas() {
    try {
      return await this.Tracas.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllTracasCategory(category) {
    try {
      return await this.Tracas.find({ category: { $regex: category, $options: 'i' } });
    } catch (error) {
      throw new Error(error);
    }
  }

}

module.exports = new TracasService(tracasModel);