const carRouter = require("express").Router();
const { check } = require("express-validator");
const {
  add,
  getAll,
  getOne,
  remove,
  update,
} = require("../controllers/carController");
const upload = require("../midellewares/uploadImage/upload");

carRouter.post(
  "/add",
  [
    check("name", "Please Enter Name").trim().notEmpty(),
    check("model", "Please Enter Dubet Date").trim().notEmpty(),
    check("price", "Please Enter Final Date").trim().notEmpty(),
    check("description", "Please Enter Description").trim().notEmpty(),
    check("image", "Please Add Image").trim().notEmpty(),
  ],
  upload.single("image"),
  add
);
carRouter.get("/", getAll);
carRouter.get("/:id", getOne);
carRouter.delete("/remove/:id", remove);
carRouter.post(
  "/update/:id",
  [
    check("name", "Please Enter Name").trim().notEmpty(),
    check("model", "Please Enter Model").trim().notEmpty(),
    check("price", "Please Enter Price").trim().notEmpty(),
    check("description", "Please Enter Description").trim().notEmpty(),
    check("image", "Please Add Image").trim().notEmpty(),
  ],
  update
);

module.exports = carRouter;
