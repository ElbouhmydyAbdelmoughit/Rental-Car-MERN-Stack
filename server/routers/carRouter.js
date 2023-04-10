const carRouter = require("express").Router();
const { check } = require("express-validator");
const upload = require("../midellewares/uploadImage/upload");
const {
  add,
  getAll,
  getOne,
  remove,
  update,
} = require("../controllers/carController");

carRouter.post("/add", upload.single("image"), add);
carRouter.get("/", getAll);
carRouter.get("/getOne/:id", getOne);
carRouter.delete("/remove/:id", remove);
carRouter.post("/update/:id", upload.single("image"), update);

module.exports = carRouter;
