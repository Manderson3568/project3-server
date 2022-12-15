const { response } = require("express");
const mongoose = require("mongoose");
const StudentLesson = mongoose.model("StudentLesson");

exports.readStudentLessons = (req, res) => {
  // console.log("back end");
  StudentLesson.find(
    {
      studentId: req.query.user,
    },
    (err, studentlessons) => {
      if (err) res.send(err);
      res.json(studentlessons);
    }
  );
};

exports.readStudentLesson = (req, res) => {
  console.log(req.query);
  StudentLesson.find(
    {
      studentId: req.query.user,
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
    lessonId: req.body.lesson,
    studentId: req.body.user,
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
    return res.json(studentLesson);
  });
};

exports.updateStudentLesson = (req, res) => {
  StudentLesson.findOneAndUpdate(
    { _id: req.params.studentLessonId },
    req.body,
    { new: true },
    (err, studentLesson) => {
      if (err) res.send(err);
      res.json(studentLesson);
    }
  );
};
