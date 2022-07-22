const router = require("express").Router();
const Minibar = require("../models/Minibar");

router.post("/", async (req, res) => {
  const newPost = new Minibar(req.body);
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
    const minibar = await Minibar.findById(req.params.id);
    res.status(200).json(minibar);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  try {
    let minibar;
    minibar = await Minibar.find();

    res.status(200).json(minibar);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
