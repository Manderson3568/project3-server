const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");

exports.createUser = (req, res) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({
        title: "error",
        error: "email in use",
      });
    }
    res.send(user);
  });
};
exports.loginUser = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err)
        return res.status(500).json({
          tite: "Server Error",
          error: err,
        });
      if (!user) {
        return res.status(401).json({
          title: "user not found",
          error: "invalid credentials",
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return {
          title: "login failed",
          error: "invalid credentials",
        };
      }
      // if everything else passed
    }
  );
};
