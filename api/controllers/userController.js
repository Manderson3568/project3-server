const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    return res.status(200).json({
      title: "signup success",
    });
  });
};
exports.loginUser = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      console.log(req);
      console.log(user);
      if (err) {
        return res.status(500).json({
          title: "Server Error",
          error: err,
        });
      }
      if (!user) {
        return res.status(401).json({
          title: "user not found",
          error: "invalid credentials",
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          title: "login failed",
          error: "invalid credentials",
        });
      }
      // if everything else passed
      let token = jwt.sign({ userID: user._id }, "secretkey");
      return res.status(200).json({
        title: "login success",
        token: token,
      });
    }
  );
};

exports.getUser = (req, res) => {
  // console.log(req);
  let token = req.headers.token;
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err)
      return res.status(401).json({
        title: "unauthorized",
      });
    // console.log(decoded);
    User.findOne({ _id: decoded.userID }, (err, user) => {
      if (err) return console.log(err);
      // console.log(user.email);
      return res.status(200).json({
        title: "user grabbed",
        user: {
          email: user.email,
          name: user.name,
          id: user._id,
        },
      });
    });
  });
};
