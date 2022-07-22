const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const newPost = new Contact(req.body);
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
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (e) {
    res.status(500).json(e);
  }
});

//tum gonderileri getirme

router.get("/", async (req, res) => {
  try {
    let contact;
    contact = await Contact.find();

    res.status(200).json(contact);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
