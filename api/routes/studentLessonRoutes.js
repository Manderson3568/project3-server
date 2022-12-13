const studentLessonBuilder = require("../controllers/studentLessonController");

module.exports = (app) => {
  app.route("/studentlessons").get(studentLessonBuilder.readStudentLesson);
};
