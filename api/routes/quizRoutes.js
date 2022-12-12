const quizBuilder = require("../controllers/quizController");

module.exports = (app) => {
  app.route("/quizzes").get(quizBuilder.readQuizzes);

  app.route("/quiz/:quizId").get(quizBuilder.readQuiz);
};
