const mongoose = require("mongoose");

const MinibarFeaturesSchema = new mongoose.Schema(
  {
    minibar: {
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

module.exports = mongoose.model("MinibarFeatures", MinibarFeaturesSchema);
