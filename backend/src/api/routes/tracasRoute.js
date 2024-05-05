const { Router } = require("express");
const TracasController = require("../controllers/tracasController");

const router = Router();

router.post("/create", TracasController.createNewTracas);

router.get("/", TracasController.getAllTracas);

router.get("/category/:category", TracasController.getAllTracasCategory);

router.get("/:name", TracasController.getOneTracas);


module.exports = router;