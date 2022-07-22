const router = require("express").Router();
const Career = require("../models/Career");

router.post("/", async (req, res) => {
  const newPost = new Career(req.body);
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
    const career = await Career.findById(req.params.id);
    res.status(200).json(career);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  try {
    let career;
    career = await Career.find();

    res.status(200).json(career);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
