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
  StudentLesson.find(
    {
      studentId: req.query.student,
      lessonId: req.query.lesson,
    },
    (err, studentlesson) => {
      if (err) res.send(err);
      return res.json(studentlesson);
    }
  );
};

exports.createStudentLesson = (req, res) => {
  console.log(req.body);
  const newStudentLesson = new StudentLesson({
    lessonID: req.body.lesson,
    studentId: req.body.student,
    position: 0,
  });
  console.log(newStudentLesson);
  newStudentLesson.save((err, studentLesson) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email in use",
      });
    }
    return studentLesson;
  });
};
