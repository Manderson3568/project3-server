const lessonBuilder = require("../controllers/lessonController");

module.exports = (app) => {
  app.route("/lessons").get(lessonBuilder.readLessons);

  app.route("/lesson/:lessonId").get(lessonBuilder.readLesson);
};
