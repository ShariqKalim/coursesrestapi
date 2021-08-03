const express = require("express");
const cors = require("cors");
require("./db/conn");

const courses = require("./models/courses");
const mongoose = require("mongoose");
const router = require("./routers/course ");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Running on the Port ${port}`);
});
