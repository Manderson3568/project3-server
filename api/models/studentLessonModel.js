const { strict } = require("assert");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentLessonSchema = new Schema(
  {
    studentId: {
      type: String,
    },
    lessonId: {
      type: String,
    },
    grade: {
      type: Number,
    },
    position: {
      type: Number,
    },
  },
  { collection: "StudentLesson" }
);

module.exports = mongoose.model("StudentLesson", StudentLessonSchema);
