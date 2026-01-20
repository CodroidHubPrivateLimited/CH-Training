

const express = require("express");
const { savingdata } = require("../Controllers/controller");

const router = express.Router();

router.post("/myfirstSegrgatedPost", savingdata);

module.exports = router;
