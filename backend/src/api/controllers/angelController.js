const AngelService = require("../services/angelService");

class AngelController {
  async createNewAngel(req, res, next) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Please upload an image for your angle" });
      }
      const picture = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
      const { 
        name, 
        description,  
      } = req.body;
      const newAngel = await AngelService.createNewAngel(name, picture, description);
      if (!newAngel) {
        return res.status(400).json({ message: "Error creating new angel" });
      }
      return res.status(201).json(newAngel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async getOneAngel(req, res, next) {
    try {
      const { name } = req.params;
      const angel = await AngelService.getOneAngel(name);
      return res.status(200).json(angel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAllAngels(req, res, next) {
    try {
      const angels = await AngelService.getAllAngels();
      return res.status(200).json(angels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AngelController();  