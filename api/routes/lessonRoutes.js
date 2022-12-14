const lessonBuilder = require("../controllers/lessonController");

module.exports = (app) => {
  app.route("/lessons").get(lessonBuilder.readLessons);

  app.route("/lessons/:lessonId").get(lessonBuilder.readLesson);
};
