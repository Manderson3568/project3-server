const { response } = require("express");
const mongoose = require("mongoose");
const Lesson = mongoose.model("Lesson");

exports.readLessons = (req, res) => {
  Lesson.find({}, (err, lessons) => {
    if (err) res.send(err);
    res.json(lessons);
  });
};

exports.readLesson = (req, res) => {
  Lesson.findById(req.params.lessonId, (err, lesson) => {
    if (err) res.send(err);
    res.json(lesson);
  });
};
