const quizBuilder = require("../controllers/quizController");

module.exports = (app) => {
  app.route("/quizzes").get(quizBuilder.readQuizzes);

  app.route("/quizzes/:quizId").get(quizBuilder.readQuiz);
};
