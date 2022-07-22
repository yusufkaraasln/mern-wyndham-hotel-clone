const router = require("express").Router();
const Food = require("../models/Food");

router.post("/", async (req, res) => {
  const newPost = new Food(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tekli gonderi getirme
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json(food);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  try {
    let food;
    food = await Food.find();

    res.status(200).json(food);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
