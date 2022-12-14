const { response } = require("express");
const mongoose = require("mongoose");
const StudentLesson = mongoose.model("StudentLesson");

exports.readStudentLessons = (req, res) => {
  // console.log("back end");
  StudentLesson.find({}, (err, studentlessons) => {
    if (err) res.send(err);
    res.json(studentlessons);
  });
};

exports.readStudentLesson = (req, res) => {
  console.log(req.query);
  // StudentLesson.find({}, (err, studentlesson) => {
  //   if (err) res.send(err);
  //   res.json(studentlesson);
  // });
};
