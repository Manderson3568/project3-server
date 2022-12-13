const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

global.Lesson = require("./api/models/lessonModel");
const lessonRoutes = require("./api/routes/lessonRoutes");

global.Slide = require("./api/models/slideModel");
const slideRoutes = require("./api/routes/slideRoutes");

global.Quiz = require("./api/models/quizModel");
const quizRoutes = require("./api/routes/quizRoutes");

global.User = require("./api/models/userModel");
const userRoutes = require("./api/routes/userRoutes");

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://user:${process.env.MONGOPW}@cluster0.ygqcbht.mongodb.net/?retryWrites=true&w=majority`
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

lessonRoutes(app); // attach routes to server
slideRoutes(app);
quizRoutes(app);
userRoutes(app);
app.listen(port);

// a 404 page not found
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port: http://localhost:${port}`);
