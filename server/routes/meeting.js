const router = require("express").Router();
const Meeting = require("../models/Meeting");

router.post("/", async (req, res) => {
    const newPost = new Meeting(req.body);
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
      const meeting = await Meeting.findById(req.params.id);
      res.status(200).json(meeting);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  
  //tum gonderileri getirme
  
  router.get("/", async (req, res) => {
    try {
      let meeting;
      meeting = await Meeting.find();
  
      res.status(200).json(meeting);
    } catch (e) {
      res.status(500).json(e);
    }
  });
  
  module.exports = router;