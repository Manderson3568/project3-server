const { response } = require("express");
const mongoose = require("mongoose");
const StudentLesson = mongoose.model("StudentLesson");

exports.readStudentLesson = (req, res) => {
  StudentLesson.find({}, (err, studentlessons) => {
    if (err) res.send(err);
    res.json(studentlessons);
  });
};
