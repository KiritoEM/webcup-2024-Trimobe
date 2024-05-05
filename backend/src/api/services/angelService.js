const angel = require("../models/angelModel");

class AngelService {
  constructor(model) {
    this.Angel = model;
  }

  async createNewAngel(name, picture, description, ) {
    try {
      const newAngel = new this.Angel({
        name,
        picture,
        description,
      });
      return await newAngel.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getOneAngel(name) {
    try {
      return await this.Angel.findOne({ name: { $regex: name, $options: 'i' } });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllAngels() {
    try {
      return await this.Angel.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new AngelService(angel);