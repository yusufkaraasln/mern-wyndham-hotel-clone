const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema(
  {
    food: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", FoodSchema);
