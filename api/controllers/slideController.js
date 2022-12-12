const { response } = require("express");
const mongoose = require("mongoose");
const Slide = mongoose.model("Slide");

// exports.readSlides = (req, res) => {
//   Slide.find({}, (err, slides) => {
//     if (err) res.send(err);
//     res.json(slides);
//   });
// };

exports.readSlide = (req, res) => {
  Slide.findById(req.params.slideId, (err, slide) => {
    if (err) res.send(err);
    res.json(slide);
  });
};
