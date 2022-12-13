const userBuilder = require("../controllers/userController");

module.exports = (app) => {
  app.route("/users").post(userBuilder.createUser).get(userBuilder.getUser);

  app.route("/login").post(userBuilder.loginUser);
};
