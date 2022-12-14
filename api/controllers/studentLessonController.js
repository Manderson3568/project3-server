const { response } = require("express");
const mongoose = require("mongoose");
const StudentLesson = mongoose.model("StudentLesson");

exports.readStudentLessons = (req, res) => {
  StudentLesson.find({}, (err, studentlessons) => {
    if (err) res.send(err);
    res.json(studentlessons);
  });
};

exports.readStudentLesson = (req, res) => {
  StudentLesson.find({}, (err, studentlesson) => {
    if (err) res.send(err);
    res.json(studentlesson);
  });
};
