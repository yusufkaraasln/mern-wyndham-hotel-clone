const mongoose = require("mongoose");

const FoodFeaturesSchema = new mongoose.Schema(
  {
    food: {
      type: String,
    },
    price: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timesamps: true }
);

module.exports = mongoose.model("FoodFeatures", FoodFeaturesSchema);
