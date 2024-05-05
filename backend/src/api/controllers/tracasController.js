const TracasService = require("../services/tracasService");

class TracasController {
  async createNewTracas(req, res, next) {
    try {
      const {
        name,
        category,
        description
      } = req.body;
      console.log(req.body);
      const newTracas = await TracasService.createNewTracas(name, category, description);
      if (!newTracas) {
        return res.status(400).json({ message: "Error creating new tracas" });
      }
      return res.status(201).json(newTracas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "createNewTracas" });
    }
  }

  async getOneTracas(req, res, next) {
    try {
      const { name } = req.params;
      const tracas = await TracasService.getOneTracas(name);
      return res.status(200).json(tracas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAllTracas(req, res, next) {
    try {
      const tracas = await TracasService.getAllTracas();
      return res.status(200).json(tracas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAllTracasCategory(req, res, next) {
    try {
      const { category } = req.params;
      const tracas = await TracasService.getAllTracasCategory(category);
      return res.status(200).json(tracas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TracasController();