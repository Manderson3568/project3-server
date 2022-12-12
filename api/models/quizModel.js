const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema(
  {
    title: {
      type: String,
    },
    questions: {
      type: Array,
    },
  },
  { collection: "quizzes" }
);

module.exports = mongoose.model("Quiz", QuizSchema);
