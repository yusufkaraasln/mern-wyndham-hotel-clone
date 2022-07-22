const mongoose = require("mongoose");

const MinibarSchema = new mongoose.Schema(
  {
    minibar: {
      type: String,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Minibar", MinibarSchema);
