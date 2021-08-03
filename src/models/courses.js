const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  link: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: String,
    require: true,
    trim: true,
  },
  ratings: {
    type: String,
    require: true,
    trim: true,
  },
  logoid: {
    type: String,
    require: true,
    trim: true,
  },
});

const courses = new mongoose.model("Courses", courseSchema);

module.exports = courses;
