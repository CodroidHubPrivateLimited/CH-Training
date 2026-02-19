require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database Error:", error);
  });

app.use("/api", require("./All Routers/router"));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
