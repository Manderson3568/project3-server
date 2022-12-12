const slideBuilder = require("../controllers/slideController");

module.exports = (app) => {
  app.route("/:lessonId/:slideId").get(slideBuilder.readSlide);
};
