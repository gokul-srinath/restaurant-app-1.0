const { Router } = require("express");
const router = Router();
const FoodModel = require("../models/FoodSchema");

router.get("/", async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.status(200).json({ data: foods });
  } catch (error) {
    res.status(400).json({ data: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const food = await FoodModel.findById(id);
    res.status(200).json({ data: food });
  } catch (error) {
    res.status(400).json({ data: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    await FoodModel.create({
      name: body.name,
      image: body.image,
      price: body.price,
      description: body.description,
    });
    res.status(200).json({ data: "OK" });
  } catch (error) {
    res.status(400).json({ data: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await FoodModel.findByIdAndUpdate(id, {
      name: body.name,
      image: body.image,
      price: body.price,
      description: body.description,
    });
    res.status(200).json({ data: "OK" });
  } catch (error) {
    res.status(400).json({ data: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await FoodModel.findByIdAndDelete(id);
    res.status(200).json({ data: "OK" });
  } catch (error) {
    res.status(400).json({ data: error.message });
  }
});

module.exports = router;
