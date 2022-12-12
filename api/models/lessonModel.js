const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonSchema = new Schema(
  {
    title: {
      type: String,
    },
    slides: {
      type: Array,
    },
    quizId: {
      type: String,
    },
  },
  { collection: "lessons" }
);

module.exports = mongoose.model("Lesson", LessonSchema);
