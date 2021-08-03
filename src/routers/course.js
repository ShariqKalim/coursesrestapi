const express = require("express");
const router = new express.Router();

const courses = require("../models/courses");

//handling POST request
router.post("/courses", async (req, res) => {
  try {
    const addCoursesRecords = new courses(req.body);
    console.log(req.body);
    const insertCourses = await addCoursesRecords.save();
    res.status(201).send(insertCourses);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/courses", async (req, res) => {
  try {
    const getCourses = await courses.find({});
    res.send(getCourses);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/courses/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCourses = await courses.findById({ _id });
    res.send(getCourses);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/courses/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getCourses = await courses.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getCourses);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/courses/:id", async (req, res) => {
  try {
    const getCourses = await courses.findByIdAndDelete(req.params.id);

    res.send(getCourses);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
