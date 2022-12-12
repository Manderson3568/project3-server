const { response } = require("express");
const mongoose = require("mongoose");
const Quiz = mongoose.model("Quiz");

exports.readQuizzes = (req, res) => {
  Quiz.find({}, (err, quizzes) => {
    if (err) res.send(err);
    res.json(quizzes);
  });
};

exports.readQuiz = (req, res) => {
  Quiz.findById(req.params.quizId, (err, quiz) => {
    if (err) res.send(err);
    res.json(quiz);
  });
};
