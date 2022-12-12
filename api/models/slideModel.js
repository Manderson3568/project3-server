const { strict } = require("assert");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SlideSchema = new Schema(
  {
    text: {
      type: String,
    },
    video: {
      type: str,
    },
    image: {
      type: strict,
    },
  },
  { collection: "slides" }
);

module.exports = mongoose.model("Slide", SlideSchema);
