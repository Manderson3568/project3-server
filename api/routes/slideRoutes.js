const slideBuilder = require("../controllers/slideController");

module.exports = (app) => {
  app.route("/slides/:slideId").get(slideBuilder.readSlide);
};
