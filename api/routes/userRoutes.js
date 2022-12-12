const userBuilder = require("../controllers/userController");

module.exports = (app) => {
  app.router("/users").post(userBuilder.createUser);

  app.router("/login").post(userBuilder.loginUser);
};
