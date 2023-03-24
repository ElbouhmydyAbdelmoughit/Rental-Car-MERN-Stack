const Car = require("../models/Car");
const { validationResult } = require("express-validator");

const add = async (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const CarExist = await Car.findOne({ name: req.body.name });
      if (!CarExist) {
        const Car = await new Car({
          name: req.body.name,
          model: req.body.model,
          price: req.body.price,
          description: req.body.description,
          image: req.body.image,
        });
        if (Car) {
          await Car.save();
          res.send("Car Created Success");
        }
      } else {
        throw new Error("This Car Aleardy Exist");
      }
    } else {
      throw new Error(errors.errors[0].msg);
    }
  } catch (error) {
    next(error);
  }
};

return

const getAll = async (req, res, next) => {
  try {
    const allCar = await Car.find();
    if (!allCar) throw new Error("Car not found");
    if (allCar) res.json({ success: true, Car: allCar });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const oneCar = await Car.findById({ _id: id });
    if (!oneCar) throw new Error("This Car Not Found");
    if (oneCar) res.json({ success: true, Car: oneCar });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const id = req.params.id;
  try {
    const CarExist = await Car.findByIdAndRemove({ _id: id });
    if (!CarExist) throw new Error("This Car not Found");
    if (CarExist) {
      res.json({ message: "Car Deleted Success" });
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const id = req.params.id;
  const errors = validationResult(req);
  try {
    if (errors.isEmpty()) {
      const updateCar = await Car.updateOne(
        { _id: id },
        {
          name: req.body.name,
          description: req.body.description,
          image: req.body.image,
          dubet_date: req.body.dubet_date,
          final_date: req.body.final_date,
          organizme: req.body.organizme,
        }
      );
      if (!updateCar) throw new Error("This Car Not Update");
      if (updateCar) {
        res.json({ message: "Update Success" });
      }
    } else throw new Error(errors.errors[0].msg);
  } catch (error) {
    next(error);
  }
};

module.exports = { add, getAll, getOne, remove, update };
