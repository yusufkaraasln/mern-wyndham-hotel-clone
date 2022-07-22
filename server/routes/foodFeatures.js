const router = require("express").Router();
const User = require("../models/User");
const FoodFeatures = require("../models/FoodFeatures");

router.post("/", async (req, res) => {
  const newPost = new FoodFeatures(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await FoodFeatures.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await FoodFeatures.findById(req.params.id);
    await post.delete();

    res.status(200).json("Gönderi silindi...");
  } catch (e) {
    res.status(500).json(e);
  }
});

//tekli gonderi getirme
router.get("/:id", async (req, res) => {
  try {
    const post = await FoodFeatures.findById(req.params.id);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  const food = req.query.food;

  try {
    let posts;
    if (food) {
      posts = await FoodFeatures.find({ food });
    } else {
      posts = await FoodFeatures.find();
    }

    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
